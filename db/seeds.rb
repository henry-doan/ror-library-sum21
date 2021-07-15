@types = ["Book", "CD", "Mag", "Video", "Audio"]
@genres = ["Horror", "Cooking", "Tech", "Math", "Sports"]

5.times do 
  # user = User.create( email: "", password: "password")

  checkout = Checkout.create(
    checkout_date: Faker::Date.backward(days: 14),
    return_date: Faker::Date.forward(days: 23),
    fees: "15",
    user_id: 1
  )

  item = Item.create(
    title: Faker::Internet.username,
    author: Faker::Internet.username,
    pic: Faker::Fillmurray.image,
    genre: @genres.sample,
    item_type: @types.sample
  )

  3.times do
    Lease.create(
      item_id: item.id,
      checkout_id: checkout.id
    )
  end

end