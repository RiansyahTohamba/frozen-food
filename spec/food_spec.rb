# file:///home/riansyah/Documents/lainnya/ebook/effective-testing-with-rspec-3_p1_0.pdf
require_relative '../models/food'
RSpec.describe 'An ideal Sayap ' do
	it 'is adding the ppn' do
		# STUB
		food = double("Food")
		allow(food).to receive(:count_price).and_return(200)
	end

	it 'is show the detail of the food' do
		# MOCK example
		# real object
		food = new Food('sayap','10-10-2021')
		# mock object
		shelflife = double('shelflife')
		# check if whether method get called or not 
		expect(shelflife).to receive(:shelflife).with('10-10-2020')
		food.show_detail(shelflife)
	end

	it 'is sayap' do
		syp = Food.new('sayap', '10-10-2021')
		
		type = syp.type
		expired = syp.expired
		
		expect(type).to eq('sayap')
		expect(expired).to eq('10-10-2021')
	end

end