module Widgets
  # GraphDataService
  class GraphDataService
    # @option[Widgets::GraphOption]
    def initializer(option)
      @option = option
    end

    def execute
      metric_values
    end

    private

    def metric_values
      @metric_values ||= MetricValue.where(cooporation: corporations, metric: metrics)
    end

    def corporations
      @corporations ||= Corporation.where(ids: option.x_axis.corporation_ids)
    end

    def metrics
      @metrics ||= Metric.where(ids: option.series.pluck(:metric_id))
    end
  end
end
