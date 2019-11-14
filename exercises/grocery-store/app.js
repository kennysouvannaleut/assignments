var shopper = {
    name: "kenny",
    cash: 5,
    isRich: (this.cash >= 5),
    items: ["shoes", "shirt", "pants"],
    grocerycart: function() {
        return this.items
    }
    
}

console.log(shopper.grocerycart())