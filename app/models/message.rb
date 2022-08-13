class Message < ApplicationRecord
  belongs_to  :sender, class_name: 'User', foreign_key: 'created_by'
  belongs_to  :channel
end
