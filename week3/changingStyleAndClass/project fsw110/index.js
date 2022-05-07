var newHeader = document.createElement('h')
newHeader.textContent = 'H1 Content Here'
var myHeader = document.getElementById('header')
myHeader.appendChild(newHeader)

var Paragraph = document.createElement('p')
Paragraph.textContent = 'This is the Paragraph Content'
document.body.appendChild(Paragraph)

// var newRef = document.createElement('a')
// newRef.textContent = https://i.stack.imgur.com/sOTlm.jpg
// document.a.appendChild(newRef)

var newList = document.createElement('li')
newList.textContent = 'List'
var myList = document.getElementById('my-list')
myList.appendChild(newList)

var newFooter = document.createElement('f')
newFooter.textContent = 'Footer Content Here'
var myFooter = document.getElementById('footer')
myFooter.appendChild(newFooter)
