module Widgets
  class GraphOption < Dry::Struct
    attribute :x_axis do
      attribute :corporation_ids, Types::Array.of(Types::String)
    end
    attribute :series, Types::Array do
      attribute :name, Types::Coercible::String
      attribute :metric_id, Types::Coercible::Integer
      attribute :y_axis, Types::Coercible::Integer.optional
    end
  end
end
