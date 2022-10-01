# frozen_string_literal: true

# message blueprint
class MessageBlueprint < Blueprinter::Base
  identifier :id
  field :content
  field :created_at do |message|
    message.created_at.iso8601
  end

  association :sender, blueprint: UserBlueprint
  association :channel, blueprint: ChannelBlueprint
end
