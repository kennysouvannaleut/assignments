import React from "react"

const friends = [
  {
    name: "Ben",
    age: 29,
    pets: [
      {
        name: "spot",
        breed: "tabby"
      }, 
      {
        name: "John Johnson",
        breed: "husky"
      }, 
      {
        name: "Bear the bear",
        breed: "Grizzly"
      }
    ]
  }, 
  {
    name: "Bob",
    age: 31,
    pets: [
      {
        name: "Sally",
        breed: "Australian Shepard"
      }
    ]
  }, 
  {
    name: "Marcus",
    age: 25,
    pets: [
      {
        name: "Indy",
        breed: "Akita"
      }, 
      {
        name: "Anna",
        breed: "persian cat"
      }
    ]
  }, 
  {
    name: "Jacob",
    age: 20,
    pets: [
      {
        name: "fluffy",
        breed: "sphynx cat"
      }, 
      {
        name: "patches",
        breed: "sphynx cat"
      }, 
      {
        name: "tiger",
        breed: "sphynx cat"
      }, 
      {
        name: "oscar",
        breed: "sphynx cat"
      }
    ]
  }
]

const petsList = friends.reduce( ( p, { pets, breed } ) => p.concat( [ { breed } ], pets ), [] )
// console.log(petsList)

const friendsList = friends.reduce( ( f, { name, age } ) => f.concat( [ { age } ], name ), [] )
// console.log(friendsList)

export default friends