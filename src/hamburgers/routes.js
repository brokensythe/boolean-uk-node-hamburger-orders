const express = require("express")

const hamburgerRouter = express.Router()

let hamburgers = [
    {
      "id": 8,
      "name": "Vegetarian Burger",
      "restaurant": "Indian Burgers",
      "web": "https://www.cookwithmanali.com/vegetarian-burger-indian-style/",
      "description": "With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!",
      "ingredients": [
        "american cheese",
        "burger sauce",
        "french mustard",
        "pickes",
        "onion",
        "Veggies"
      ],
      "quantity": 5
    },
    {
      "id": 9,
      "name": "Fat Santa",
      "restaurant": "Sky City Hamilton",
      "web": "https://skycityhamilton.co.nz/eat-drink/eat-burger/",
      "description": "A Christmas themed burger",
      "ingredients": [
        "chicken thigh",
        "champagne ham",
        "sage and onion stuffing",
        "gravy mash",
        "lettuce",
        "tomato",
        "cranberry sauce"
      ],
    "quantity": 5
    },
    {
      "id": 10,
      "name": "Blondie",
      "restaurant": "Yankys",
      "web": "http://yankyslambton.co.za/menu/",
      "description": "Delicious steak burger",
      "ingredients": [
        "steak",
        "BBQ sauce",
        "bacon",
        "egg",
        "cheese",
        "lettuce",
        "tomato",
        "onion",
        "gerkins"
      ],
      "quantity": 5
    },
    {
      "id": 11,
      "name": "Monster Burger",
      "restaurant": "Yankys",
      "web": "http://yankyslambton.co.za/menu/",
      "description": "Massive meaty burger - the size of a dinner plate",
      "ingredients": [
        "250g patty",
        "bacon",
        "cheese",
        "2 eggs",
        "steak",
        "BBQ sauce",
        "lettuce",
        "tomato",
        "onion",
        "gerkins"
      ],
      "quantity": 5
    }
    ]

hamburgerRouter.get("/", (req, res) => {
    res.json({ hamburgers })
})

hamburgerRouter.post("/", (req, res) => {
    const newHamburger = req.body
    hamburgers = [...hamburgers, newHamburger]

    res.status(201).json({ hamburger : newHamburger })
})

hamburgerRouter.patch("/:id", (req, res) => {
    let { id } = req.params
    id = Number(id)
    const hamburgerToPatch = hamburgers.find(hamburger=>hamburger.id===id)

    if (hamburgerToPatch) {
        hamburgers = hamburgers.map(hamburger=>{
            if(hamburger.id===id) {
                return hamburger = {...hamburger, ...req.body}
            } else return hamburger
        })
        res.status(202).json({ data: req.body })
    }else res.status(404).json({ msg: "couldn't find the id you entered" })
})

module.exports = hamburgerRouter
