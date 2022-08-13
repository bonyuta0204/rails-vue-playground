# frozen_string_literal: true

# user blue print
class UserBlueprint < Blueprinter::Base
  field :id do |user|
    user.id.to_s
  end
  field :name

  field :avatar_url
end
