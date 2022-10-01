# frozen_string_literal: true

module Channels
  # Channels IndexService
  class IndexService
    def execute
      Channel.all
    end
  end
end
