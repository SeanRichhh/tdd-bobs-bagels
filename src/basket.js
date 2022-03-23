class Basket{
    constructor(){
        this.basketOrder = [];
    }
    addItem(item){
        this.basketOrder.push(item);
        return this.basketOrder
    }
    removeItem(id){
        const newBasket = []

        for(let i = 0; i < this.basketOrder.length; i++){
            if(this.basketOrder[i].id !== id){
                newBasket.push(this.basketOrder[i])
            }
        }
        this.basketOrder = newBasket
        return this.basketOrder
    }
    
} 


module.exports = Basket