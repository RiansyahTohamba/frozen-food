# file:///home/riansyah/Documents/lainnya/ebook/effective-testing-with-rspec-3_p1_0.pdf
require_relative '../models/food'
RSpec.describe 'An ideal Sayap ' do
	it 'is sayap' do
		# expect(ledger).to receive(:records)
	end
	it 'is sayap' do
		syp = Food.new('sayap', '10-10-2021')
		
		type = syp.type
		expired = syp.expired
		
		expect(type).to eq('sayap')
		expect(expired).to eq('10-10-2021')
	end

end