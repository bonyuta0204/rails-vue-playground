# frozen_string_literal: true

FactoryBot.define do
  factory :metric_value do
    metric
    corporation
    value { 100 }
    fiscal_year { 2022 }
    quarter { '1Q' }
  end
end
