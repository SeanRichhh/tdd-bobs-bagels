class Basket{
    constructor(capacity = 2){
        this.basketOrder = [];
        this.capacity = capacity
    }
    addItem(item){
        if(this.isFull()){
            return false
        }

        this.basketOrder.push(item);
        return this.basketOrder
    }
    removeItem(id){
        const newBasket = []
        let foundItem = false

        for(let i = 0; i < this.basketOrder.length; i++){
            if(this.basketOrder[i].id !== id){
                newBasket.push(this.basketOrder[i])
                continue
            }
            foundItem = true
        }
        if(foundItem === false){
            return false;
        }
        
        this.basketOrder = newBasket
        return this.basketOrder
    }

    isFull(){     
        if(this.capacity <= this.basketOrder.length){
            return true
        }
        return false
    }
    
} 


module.exports = Basket