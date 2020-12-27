require 'date'
class Food
	attr :type, :expired
	
	def initialize(type,expired)
	  @type = type
	  @expired = expired
	end

	def shelflife
		if @type.eql? 'sayap'
			@expired = Date.today.next_year
		end				
	end

	def show_detail(shelflife)

	end
end