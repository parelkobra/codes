#!/bin/ruby

dial_book = {
  "newyork" => "212",
  "newbrunswick" => "732",
  "edison" => "908",
  "plainsboro" => "609",
  "sanfrancisco" => "301",
  "miami" => "305",
  "paloalto" => "650",
  "evanston" => "847",
  "orlando" => "407",
  "lancaster" => "717"
}
 
# Get city names from the hash
def get_city_names(somehash)
  somehash.keys
end
 
# Get area code based on given hash and key
def get_area_code(somehash, key)
  somehash[key]
end
 
# Execution flow
loop do
  puts 'Do you want to lookup an area code based on a city name? (y/n)'
  continue = gets.chomp.downcase

  if continue == 'y'
  elsif continue == 'n'
    return
  else
    next
  end

  puts 'Which city do you want the area code for?'
  get_city_names(dial_book).each { |city| puts city }
  puts 'Enter your selection'

  city = gets.chomp

  if dial_book.include?(city)
    area_code = get_area_code(dial_book, city)
    puts "The area code for #{city} is #{area_code}"
  else
    puts "City '#{city}' not found"
  end
end
