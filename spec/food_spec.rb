RSpec.describe 'An ideal sandwich' do
	it 'is delicious' do
		sandwich = Food.new('delicious', [])
		
		taste = sandwich.taste
		
		expect(taste).to eq('delicious')
	end
end