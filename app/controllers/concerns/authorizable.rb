# Authorizable
module Authorizable
  extend ActiveSupport::Concern

  def access_token
    session[:token] || ''
  end

  def require_access_token!
    Auth::Firebase::JwtService.new(access_token).validate!
  end
end
