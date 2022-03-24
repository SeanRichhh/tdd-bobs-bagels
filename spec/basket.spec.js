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
    // Test for Part 2 
    
    it("Gives me false if adding items to a full basket",() => {
        //set up
        const basket = new Basket()
        const itemOne = new Item(1, "First Bagel")
        const itemTwo = new Item(2, "Second Bagel")
        const itemThree = new Item(3, "Third Bagel")
        const expected = false
        //excute
        basket.addItem(itemOne)
        basket.addItem(itemTwo)

        const result = basket.addItem(itemThree)  
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

    // Test 3 
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
    
    //Test 4
    it("Should tell me the basket is full",() => {
        //set up
        const basket = new Basket()
        const itemOne = new Item(1, "First Bagel")
        const itemTwo = new Item(2, "Second Bagel")
        const expected = true
    
        //excute
        basket.addItem(itemOne)
        basket.addItem(itemTwo)
        const result = basket.isFull()  
        //Verify
        expect(result).toEqual(expected)
   
    })
    it("Should tell me if my basket is not full",() => {
        //set up
        const basket = new Basket()
        const expected = false
    
        //excute
    
        const result = basket.isFull()  
        //Verify
        expect(result).toEqual(expected)
   
    })

    //Test 5
    it("Should give me a bigger basket",() => {
        //set up
        const basket = new Basket(4)
        const itemOne = new Item(1, "First Bagel")
        const itemTwo = new Item(2, "Second Bagel")
        const itemThree = new Item(3, "Third Bagel")
        const itemFour = new Item(4, "Fourth Bagel");
       
    
        //excute
        basket.addItem(itemOne)
        basket.addItem(itemTwo)
        const result1 = basket.isFull();  

        basket.addItem(itemThree)
        basket.addItem(itemFour)
        const result2 = basket.isFull()  
        //Verify
        expect(result1).toEqual(false)
        expect(result2).toEqual(true)
   
    })

    // Test 6
    it("Remove non-existing item from your basket",() => {
        //set up
        const basket = new Basket()
        const itemOne = new Item(1, "First Bagel")
        const itemTwo = new Item(2, "Second Bagel")
        const expected = false
        //excute
        basket.addItem(itemOne)
        basket.addItem(itemTwo)
        const result = basket.removeItem(10)  
        //Verify
        expect(result).toEqual(expected)      
    })
    

})