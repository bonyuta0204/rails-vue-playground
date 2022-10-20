# frozen_string_literal: true

RSpec.describe Widgets::GraphDataService do
  subject { service.execute }

  let(:service) { described_class.new(option) }
  let(:option) do
    Widgets::GraphOption.new(x_axis: { corporation_ids: [corporation1.id, corporation2.id] },
                             series: [
                               { metric_id: metric1.id, y_axis: nil },
                               { metric_id: metric2.id, y_axis: 1 }
                             ])
  end

  let(:corporation1) { create(:corporation) }
  let(:corporation2) { create(:corporation) }

  let(:metric1) { create(:metric) }
  let(:metric2) { create(:metric) }

  describe '#execute' do
    before do
      create(:metric_value, corporation: corporation1, metric: metric1)
      create(:metric_value, corporation: corporation2, metric: metric1)
      create(:metric_value, corporation: corporation1, metric: metric2)
      create(:metric_value, corporation: corporation2, metric: metric2)
    end

    let(:result) do
      {
        x_axis: {
          categories: [corporation1.name, corporation2.name]
        },
        series: [
          {
            name: metric1.name,
            data: [
              MetricValue.find_by(metric: metric1, corporation: corporation1).value,
              MetricValue.find_by(metric: metric1, corporation: corporation2).value
            ]
          },
          {
            name: metric2.name,
            data: [
              MetricValue.find_by(metric: metric2, corporation: corporation1).value,
              MetricValue.find_by(metric: metric2, corporation: corporation2).value
            ]
          }
        ]
      }
    end

    it { is_expected.to eq(result) }
  end
end
