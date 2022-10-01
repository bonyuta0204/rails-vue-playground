# frozen_string_literal: true

module Ajax
  module Dashboards
    # Dashboard usecase
    class ShowUsecase
      def initialize(params)
        @dashboard_id = params[:id]
      end

      def call
        [:ok, DashboardBlueprint.render_as_json(dashboard, view: :show)]
      end

      private

      attr_reader :dashboard_id

      def dashboard
        @dashboard ||= Dashboard.find(dashboard_id)
      end
    end
  end
end
