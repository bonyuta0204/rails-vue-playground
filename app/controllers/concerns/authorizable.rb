# Authorizable
module Authorizable
  extend ActiveSupport::Concern

  def access_token
    session[:token] || ''
  end

  def current_user
    payload = Auth::Firebase::JwtService.new(access_token).validate!
    identifier = payload[:sub]
    User.find_by(identifier: identifier)
  end

  def require_access_token!
    Auth::Firebase::JwtService.new(access_token).validate!
  end
end
