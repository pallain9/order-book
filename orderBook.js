function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  for (var i = 0; i <= existingBook.length; i++)
    if (existingBook.length === 0) {
      existingBook.push(incomingOrder)
      return existingBook
    }

    else if ((existingBook[i].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[i].quantity === incomingOrder.quantity) && (existingBook[i].price === incomingOrder.price)) {
      return updatedBook
    }
    else if ((existingBook[i].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[i].quantity > incomingOrder.quantity) && (existingBook[i].price === incomingOrder.price)) {
      const updatedQuantity = existingBook[i].quantity - incomingOrder.quantity
      existingBook[i].quantity = updatedQuantity
      return existingBook
    }
    else if ((existingBook[i].type === 'buy' && incomingOrder.type === 'sell') && (existingBook[i].quantity < incomingOrder.quantity) && (existingBook[i].price === incomingOrder.price)) {
      let partialOrder = []
      const updatedQuantity = incomingOrder.quantity - existingBook[i].quantity
      incomingOrder.quantity = updatedQuantity
      partialOrder.push(incomingOrder)
      return partialOrder
    }
    else if ((existingBook[i].type === 'buy') && (incomingOrder.type === 'sell') && (existingBook[i].quantity === incomingOrder.quantity) && (incomingOrder.price <= existingBook[i].price)) {
      return updatedBook
    }
    else {
      existingBook.push(incomingOrder)
      return existingBook
    }
}
module.exports = reconcileOrder