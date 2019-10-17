function reconcileOrder(existingBook, incomingOrder) {

  let updatedBook = []
  updatedBook = updatedBook.concat(existingBook)
  //logic
  updatedBook.push(incomingOrder)

  return updatedBook
}
/*let i
for (i = 0; i, updatedBook.length; i++) {
console.log(updatedBook[i].price)
console.log(updatedBook[i].type)
console.log(updatedBook[i].quantity)
}
return updatedBook
}
*/
module.exports = reconcileOrder
