
var newH = document.createElement('h1')
newH.textContent = "Welcome to my JS site"
document.body.appendChild(newH)



var newListItem = document.createElement('li')
newListItem.textContent = '3'
var myList = document.getElementById('my-list')
myList.appendChild(newListItem)





var newP = document.createElement('p')
newP.textContent = "All of this was created with Javascript";
document.body.appendChild(newP)