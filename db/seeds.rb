# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  poutine = Poutine.create(
    [{
        name: "Ma Poule Mouillée",
        image_url: "https://res.cloudinary.com/dppe5cx49/image/upload/v1600883649/mapoul_afqkss.jpg"
      },
      {
        name: "Chez Claudette",
        image_url: "https://res.cloudinary.com/dppe5cx49/image/upload/v1600883649/claudette_snunat.jpg"
      },
      {
        name: "La Banquise",
        image_url: "https://res.cloudinary.com/dppe5cx49/image/upload/v1600883649/banquise_ghratd.jpg"
      }]
  )

  reviews = Review.create(
    [{
        title: "Great Poutine",
        description: "",
        score: 5,
        poutine: Poutine.first
      },
      {
        title: "Decent Poutine",
        description: "Was a good find when drunk.",
        score: 4,
        poutine: Poutine.second
      },
      {
        title: "Okayish Poutine",
        description: "Overrated",
        score: 3,
        poutine: Poutine.third
      }]
  )
