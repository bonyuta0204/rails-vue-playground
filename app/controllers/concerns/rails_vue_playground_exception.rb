# RailsVuePlayGround
module RailsVuePlaygroundException
  extend ActiveSupport::Concern

  class UnauthorizedError < StandardError
  end
end
