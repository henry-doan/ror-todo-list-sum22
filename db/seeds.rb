# List.create( title: 'Grocery', desc: 'Food for the week')
# List.create( title: 'Office', desc: 'Office supplies needed')
# List.create( title: 'Bunker', desc: 'Meal prep')

# Delete any list that was already there, optional, mainly for testing 
List.delete_all

# help makes it unqiue
@counter = 0

# create it 10.times
10.times do
  List.create(
    title: "#{Faker::Hipster.word}#{@counter}",
    desc: Faker::Hipster.sentence
  )
  @counter += 1
end

# bundle exec rails db:seed