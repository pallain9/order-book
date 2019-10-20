function masterBook(existingBook, incomingOrder) {
  existingBook.push(incomingOrder)

  return existingBook
}



function matchingOrder(existingBook, incomingOrder) {

  if (existingBook[1] === incomingOrder[1])
    return []
}

function reducedOrder(existingBook, incomingOrder) {
  //if buy and sell have the same quantity return []
}
function reconcileOrder(existingBook, incomingOrder) {
  /* 1. if the existing book is empty add order and send back
   2. if the order has the same type, then add them to the book
   3. if the existing book exists and a new order comins in with a different type, then add to the existing book
   4. if the existing book quantity matches the incomingOrder quantity are matching, then remove it.
   5. if the existing book contains a larger quantity than the incomingOrder, then fulfill the order and reduce the quantity by the smaller value
   6. if the incomingOrder quantity is greater than the existingBook quantity then fulfill the order and keep the remaining incomingOrder as the new existingBook
   BONUS
   1. if the existingBook price is greater than the incomingOrder then fulfill the order
   2. if the incomingOrder price is greater than the existingBook price then do not fullfill the order
   */
  return masterBook(existingBook, incomingOrder)
}
module.exports = reconcileOrder