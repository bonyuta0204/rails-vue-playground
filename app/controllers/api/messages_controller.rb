# frozen_string_literal: true

module Api
  # messages controller
  class MessagesController < ApplicationController
    def index
      status, data = Api::Messages::IndexUsecase.new(params.to_unsafe_h).call

      render json: data, status: status
    end
  end
end
