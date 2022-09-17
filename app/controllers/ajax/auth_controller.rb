# frozen_string_literal: true

module Ajax
  # auth controller
  class AuthController < ApplicationController
    def sign_in
      status, data = Ajax::Auth::SignInUsecase.new(params.to_unsafe_h).call

      render json: data, status: status
    end
  end
end
