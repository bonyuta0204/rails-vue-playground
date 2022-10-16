# frozen_string_literal: true

module Widgets
  class GraphOption < Dry::Struct
    attribute :x_axis do
      attribute :corporation_ids, Types::Array.of(Types::Integer)
    end
    attribute :series, Types::Array do
      attribute :metric_id, Types::Coercible::Integer
      attribute :y_axis, Types::Coercible::Integer.optional
    end
  end
end
