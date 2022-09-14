# frozen_string_literal: true

# message model
class Message < ApplicationRecord
  belongs_to  :sender, class_name: 'User', foreign_key: 'created_by', inverse_of: 'messages'
  belongs_to  :channel

  # This scope is for inner use
  # Use self.latest_messages instead because it is faster
  scope :_latest_messages, lambda {
    where('NOT EXISTS (
    select
      1
    from
      messages msg2
    where
      messages.channel_id = msg2.channel_id
      and messages.created_at < msg2.created_at
  )')
  }

  scope :with_includes, lambda {
    includes(:sender, :channel)
  }

  def self.latest_messages
    relation = Messages::LatestMessageService.new(all).execute
    relation
  end
end
