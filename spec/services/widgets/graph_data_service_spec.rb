RSpec.describe Widgets::GraphDataService do
  subject { service.execute }

  let(:service) { described_class.new(option) }
  let(:option) { Widgets::GraphOption.new(x_axis: { corporation_ids: corporation_ids }) }

  let(:corporation_ids) { 1 }

  describe '#execute' do
    it do
      expect(subject).to eq('hoge')
    end
  end
end
