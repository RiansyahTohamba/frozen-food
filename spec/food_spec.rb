class Food
	attr :type, :expired
	def initialize(type,expired)
	  @type = type
	  @expired = expired
	end
end
RSpec.describe 'An ideal nugget' do
	it 'is sayap' do
		nugget = Food.new('sayap', '10-10-2021')
		
		type = nugget.type
		expired = nugget.expired
		
		expect(type).to eq('sayap')
		expect(expired).to eq('10-10-2021')
	end
end