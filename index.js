
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector("#nested .target")
}


function deepestChild() {
  debugger
  var  n = document.getElementById("grand-node")
  var nextN = n.children[0]

  // for(var i = n.length; i >= 0; i--) {
  //   n = nextN
  //   nextN = n.children[0]
  // }
  while(nextN) {
    n = nextN
    nextN = n.children[0]
  }
  console.log(n.length)
  return n
}


function increaseRankBy(n) {
  var q = document.querySelectorAll(".ranked-list")

  for(var i = 0; i < q.length; i++) {
    var children = q[i].children

    for(var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
//The innerHtml propety sets or returns the html content (inner html) of an element.
//Return the innerHTML property: HTMLElementObject.innerHTML
//Set the innerHTML property: HTMLElementObject.innerHTML = text
