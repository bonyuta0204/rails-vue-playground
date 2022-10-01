# frozen_string_literal: true

module Ajax
  module Dashboards
    # Dashboard Index usecase
    class IndexUsecase
      def call
        dashboards = Dashboard.all
        [:ok, DashboardBlueprint.render_as_json(dashboards)]
      end
    end
  end
end
