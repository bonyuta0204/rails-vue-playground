# frozen_string_literal: true

class Dashboard < ApplicationRecord
  has_many :widgets, dependent: :destroy
end
