# frozen_string_literal: true

module Ajax
  # Super Class for API
  class AuthorizedApiController < ApplicationApiController
    include Authorizable

    before_action :require_access_token!
  end
end
