# frozen_string_literal: true

module Ajax
  module Widgets
    class ShowUsecase
      def initialize(params)
        @widget_id = params[:id]
      end

      def call
        result = case widget.type
                 when 'GraphWidget'
                   widget.attributes.merge(
                     {
                       graph_data: ::Widgets::GraphDataService.new(
                         ::Widgets::GraphOption.new(widget.options.deep_symbolize_keys)
                       ).execute
                     }
                   )
                 end
        [:ok, result]
      end

      private

      attr_reader :widget_id

      def widget
        @widget ||= Widget.find(widget_id)
      end
    end
  end
end
