# frozen_string_literal: true

# metric model
class Metric < ApplicationRecord
  has_many :metric_values, dependent: :destroy
end
