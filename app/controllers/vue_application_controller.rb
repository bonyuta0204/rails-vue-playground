# frozen_string_literal: true

# vue application controller
class VueApplicationController < ApplicationController
  include Authorizable

  before_action :require_access_token!

  rescue_from RailsVuePlaygroundException::UnauthorizedError, with: :unauthrozied

  def index; end

  def unauthrozied
    redirect_to '/sign_in'
  end
end
