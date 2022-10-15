# frozen_string_literal: true

# coporation model
class Corporation < ApplicationRecord
  has_many :metric_values, dependent: :destroy
end
