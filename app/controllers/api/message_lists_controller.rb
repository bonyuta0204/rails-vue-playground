# frozen_string_literal: true

module Api
  # messages controller
  class MessageListsController < ApplicationController
    def index
      status, data = Api::MessageLists::IndexUsecase.new.call

      render json: data, status: status
    end
  end
end
