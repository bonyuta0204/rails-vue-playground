# frozen_string_literal: true

module Auth
  module Firebase
    # JWT Service
    class JwtService
      include RailsVuePlaygroundException

      ALG = 'RS256'
      CERTS_URI = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com'
      CERTS_CACHE_KEY = 'firebase_auth_certificates'
      PROJECT_ID = Settings.firebase.projectId
      ISSUER_URI_BASE = 'https://securetoken.google.com/'

      def initialize(token)
        @token = token
      end

      # Validates firebase authentication token
      #
      # @raise [InvalidTokenError] validation error
      # @return [Hash] valid payload
      def validate!
        options = {
          algorithm: ALG,
          iss: ISSUER_URI_BASE + PROJECT_ID,
          verify_iss: true,
          aud: PROJECT_ID,
          verify_aud: true,
          verify_iat: true
        }
        payload, = JWT.decode(@token, nil, true, options) do |header|
          cert = fetch_certificates[header['kid']]
          OpenSSL::X509::Certificate.new(cert).public_key if cert.present?
        end

        # JWT.decode でチェックされない項目のチェック
        unless Time.zone.at(payload['auth_time']).past?
          raise RailsVuePlaygroundException::UnauthorizedError,
                'Invalid auth_time'
        end
        raise RailsVuePlaygroundException::UnauthorizedError, 'Invalid sub' if payload['sub'].empty?

        payload.deep_symbolize_keys
      rescue JWT::DecodeError => e
        raise RailsVuePlaygroundException::UnauthorizedError, e.message
      end

      private

      # 証明書は毎回取得せずにキャッシュする (要: Rails.cache)
      def fetch_certificates
        cached = Rails.cache.read(CERTS_CACHE_KEY)
        return cached if cached.present?

        res = Net::HTTP.get_response(URI(CERTS_URI))
        raise 'Fetch certificates error' unless res.is_a?(Net::HTTPSuccess)

        body = JSON.parse(res.body)
        expires_at = Time.zone.parse(res.header['expires'])
        Rails.cache.write(CERTS_CACHE_KEY, body, expires_in: expires_at - Time.current)

        body
      end
    end
  end
end
