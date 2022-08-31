# frozen_string_literal: true

module Ajax
  # messages controller
  class MessageListsController < ApplicationController
    def index
      status, data = Ajax::MessageLists::IndexUsecase.new.call

      render json: data, status: status
    end
  end
end
