# frozen_string_literal: true

module Ajax
  # auth controller
  class AuthController < ApplicationController
    def sign_in
      status, token = Ajax::Auth::SignInUsecase.new(params.to_unsafe_h).call

      session[:token] = token

      render json: {}, status: status
    end
  end
end
