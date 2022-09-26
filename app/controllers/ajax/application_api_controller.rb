module Ajax
  # Super Class for API
  class ApplicationApiController < ActionController::API
    include RailsVuePlaygroundException

    rescue_from RailsVuePlaygroundException::UnauthorizedError, with: :unauthrozied

    def unauthrozied
      Rails.logger.warn 'unauthrozied'

      render status: :unauthorized, json: {}
    end
  end
end
