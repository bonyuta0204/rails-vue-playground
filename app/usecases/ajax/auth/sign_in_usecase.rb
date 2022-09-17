module Ajax
  module Auth
    class SignInUsecase
      def initialize(params)
        @token = params[:token]
      end

      def call
        puts token
      end

      private

      attr_reader :token
    end
  end
end
