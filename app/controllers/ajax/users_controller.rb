# frozen_string_literal: true

module Ajax
  # users controller
  class UsersController < ApplicationController
    def index
      useres = User.all
      render json: useres
    end
  end
end
