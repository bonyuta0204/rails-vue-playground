# frozen_string_literal: true

# channel blueprint
class ChannelBlueprint < Blueprinter::Base
  field :id do |channel|
    channel.id.to_s
  end
  field :name
end
