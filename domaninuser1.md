| Psuedo                  | Objects | Properties  | Messages / Methods | Output              |
| ----------------------- | ------- | ----------- | ------------------ | ------------------- |
| Create Item             |Item     |@"String"    |                    |                     |
| Add Bagel to Basket     | Basket  |             |addItem()           |basket[Array]        |
| Remove Bagel From Basket| Basket  |             |removeItem()        |basket[Array]        |

# Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket


| Psuedo                  | Objects | Properties  | Messages / Methods | Output              |
| ----------------------- | ------- | ----------- | ------------------ | ------------------- |
|Adds a capacity to basket|Basket   |             |isFull()            |@boolean             |

# Part 2
As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.

