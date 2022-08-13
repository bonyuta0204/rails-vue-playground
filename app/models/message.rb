# frozen_string_literal: true

# message model
class Message < ApplicationRecord
  belongs_to  :sender, class_name: 'User', foreign_key: 'created_by', inverse_of: 'messages'
  belongs_to  :channel
end
