# frozen_string_literal: true

class MessageBlueprint < Blueprinter::Base
  identifier :id
  field :content
  field :created_at

  association :sender, blueprint: UserBlueprint
end
