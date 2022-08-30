# frozen_string_literal: true

module Ajax
  # channels controller
  class ChannelsController < ApplicationController
    def index
      status, data = Ajax::Channels::IndexUsecase.new.call

      render json: data, status: status
    end
  end
end
