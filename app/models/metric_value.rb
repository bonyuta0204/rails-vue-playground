# frozen_string_literal: true

# metric model
class MetricValue < ApplicationRecord
  belongs_to :metric
  belongs_to :corporation
end
