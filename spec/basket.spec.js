const Basket = require("../src/basket.js");
const Item = require("../src/item.js")

describe("Basket", () => {
    //Test 1 
    
    it("Adds an item to your basket",() => {
        //set up
        const basket = new Basket()
        const itemOne = new Item(1, "First Bagel")
        const itemTwo = new Item(2, "Second Bagel")
        const expected = [itemOne, itemTwo]
        //excute
        basket.addItem(itemOne)
        const result = basket.addItem(itemTwo)  
        //Verify
        expect(result).toEqual(expected)      
    })

    
    //TEST 2
    
    it("Remove item to your basket",() => {
        //set up
        const basket = new Basket()
        const itemOne = new Item(1, "First Bagel")
        const itemTwo = new Item(2, "Second Bagel")
        const expected = [itemOne]
        //excute
        basket.addItem(itemOne)
        basket.addItem(itemTwo)
        const result = basket.removeItem(2)  
        //Verify
        expect(result).toEqual(expected)      
    })
    
    

})