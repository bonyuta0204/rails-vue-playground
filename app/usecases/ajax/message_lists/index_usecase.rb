# frozen_string_literal: true

module Ajax
  module MessageLists
    # Messages Index usecase
    class IndexUsecase
      def call
        messages = ::MessageLists::IndexService.new.execute
        [:ok, MessageBlueprint.render_as_json(messages)]
      end
    end
  end
end
