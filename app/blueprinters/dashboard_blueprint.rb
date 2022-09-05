# frozen_string_literal: true

# Dashboard Blueprint
class DashboardBlueprint < Blueprinter::Base
  identifier :id
  field :name

  view :show do
    association :widgets, blueprint: WidgetBlueprint
  end
end
