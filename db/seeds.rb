# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

puts "Seeding..."
User.create(username: "leslie", password: "123123")
User.create(username: "yi", password: "123123")
User.create(username: "yearim", password: "123123")
User.create(username: "baud", password: "123123")
User.create(username: "baudouin", password: "123123")
User.create(username: "jenny", password: "123123")



30.times do
  Post.create(text: Faker::Lorem.paragraph(sentence_count: rand(10..100)), user_id: User.all.sample.id)
end

10.times do
  Comment.create(text:Faker::Quote.famous_last_words, post_id: Post.all.sample.id, user_id: User.all.sample.id)
end
10.times do
  Comment.create(text:Faker::Quote.jack_handey, post_id: Post.all.sample.id, user_id: User.all.sample.id)
end
10.times do
  Comment.create(text:Faker::Quote.most_interesting_man_in_the_world, post_id: Post.all.sample.id, user_id: User.all.sample.id)
end

30.times do
  Comment.create(text:Faker::Quote.singular_siegler, post_id: Post.all.sample.id, user_id: User.all.sample.id)
end

10.times do
  Comment.create(text: Faker::Quote.unique.famous_last_words, post_id: Post.all.sample.id, user_id:1)
end



puts "Done Seeding!"
