# frozen_string_literal: true

module Widgets
  # GraphDataService
  class GraphDataService
    # @option[Widgets::GraphOption]
    def initialize(option)
      @option = option
    end

    def execute
      {
        x_axis: x_axis,
        series: option.series.map do |series_option|
          { name: metrics.detect { |metric| metric.id == series_option.metric_id }.name,
            data: corporations.map do |corporation|
              metric_values.detect do |metric_value|
                metric_value.corporation_id == corporation.id && metric_value.metric_id == series_option.metric_id
              end&.value
            end }
          # y_axis: series_option.y_axis
        end
      }
    end

    private

    attr_reader :option

    def x_axis
      {
        categories: corporations.pluck(:name)
      }
    end

    def metric_values
      @metric_values ||= MetricValue.where(corporation: corporations, metric: metrics)
    end

    def corporations
      @corporations ||= Corporation.where(id: option.x_axis.corporation_ids)
    end

    def metrics
      @metrics ||= Metric.where(id: option.series.pluck(:metric_id))
    end
  end
end
