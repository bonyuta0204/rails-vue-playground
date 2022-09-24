# frozen_string_literal: true

module Ajax
  module Auth
    # SignInUsecasle
    class SignInUsecase
      def initialize(params)
        @token = params[:token]
      end

      def call
        decoded_jwt = ::Auth::Firebase::JwtService.new(token).validate!
        identifier = decoded_jwt[:sub]
        # create new if user when not exists
        user = User.find_or_initialize_by(identifier: identifier)


        if user.new_record?
          user.name = decoded_jwt[:name]
          user.avatar_url = decoded_jwt[:picture]
          user.save!
        end

        [:ok, token]
      end

      private

      attr_reader :token
    end
  end
end
