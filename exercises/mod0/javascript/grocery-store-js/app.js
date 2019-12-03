// Grocery Store JS

var shopper = {
    name: "kenny",                          /* string */
    cash: 5,                                /* number */     
    isRich: (this.cash >= 5),               /* boolean */
    items: ["shoes", "shirt", "pants"],     /* array */
    grocerycart: function() {               /* function */
        return this.items
    }
    
}

console.log(shopper.grocerycart());