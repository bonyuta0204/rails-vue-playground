# frozen_string_literal: true

module Ajax
  module Channels
    # Channels Index usecase
    class IndexUsecase
      def call
        messages = ::Channels::IndexService.new.execute
        [:ok, ChannelBlueprint.render_as_json(messages)]
      end
    end
  end
end
