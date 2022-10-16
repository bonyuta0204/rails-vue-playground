# frozen_string_literal: true

module Ajax
  module Widgets
    class ShowUsecase
      def initialize(params)
        @widget_id = params[:id]
      end

      def call
        case widget.type
        when 'GraphWidget'
          widget.attributes.merge(
            ::Widgets::GraphDataService.new(::Widgets::GraphOption.new(widget.options.deep_symbolize_keys)).execute
          )
        end
      end

      private

      attr_reader :widget_id

      def widget
        @widget ||= Widget.find(widget_id)
      end
    end
  end
end
