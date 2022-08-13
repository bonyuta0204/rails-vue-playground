# frozen_string_literal: true

# user model
class User < ApplicationRecord
  has_many :messages, foreign_key: 'created_by', inverse_of: 'sender', dependent: :destroy
end
