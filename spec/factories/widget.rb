# frozen_string_literal: true

FactoryBot.define do
  factory :text_widget, class: 'TextWidget' do
    dashboard
    x { 1 }
    y { 1 }
    h { 1 }
    w { 1 }
    text { 'test text widget' }
  end
end
