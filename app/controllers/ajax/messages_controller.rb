# frozen_string_literal: true

module Ajax
  # messages controller
  class MessagesController < ApplicationController
    def index
      status, data = Ajax::Messages::IndexUsecase.new(params.to_unsafe_h).call

      render json: data, status: status
    end
  end
end
