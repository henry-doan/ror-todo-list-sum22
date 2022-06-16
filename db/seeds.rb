# List.create( title: 'Grocery', desc: 'Food for the week')
# List.create( title: 'Office', desc: 'Office supplies needed')
# List.create( title: 'Bunker', desc: 'Meal prep')

#  delete all children before we delete parent
Todo.delete_all
# Delete any list that was already there, optional, mainly for testing 
List.delete_all

# help makes it unqiue
@counter = 0

# rating 1-5
@nums = [1, 2, 3, 4, 5]

# create it 10.times
10.times do
  @list = List.create(
    title: "#{Faker::Hipster.word}#{@counter}",
    desc: Faker::Hipster.sentence
  )
  @counter += 1

  # will create 3 todos for each list
  3.times do
    Todo.create(
      title: Faker::Food.ingredient,
      rating: @nums.sample,
      price: 1.50,
      complete: Faker::Boolean.boolean,
      list_id: @list.id # passing in the parents id
    )
  end

end

# bundle exec rails db:seed