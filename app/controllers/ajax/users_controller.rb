module Ajax
  class UsersController < ApplicationController
    def index
      useres = User.all
      render json: useres
    end
  end
end
