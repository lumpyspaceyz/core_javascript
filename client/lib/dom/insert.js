// insertBefore()
function insertBefore(node, text) {

  if(typeof node === 'string') node = getNode(node);
  node.insertAdjacentHTML('beforebegin', text);
}


// insertFirst()
function insertFirst(node, text) {

  if(typeof node === 'string') node = getNode(node);
  node.insertAdjacentHTML('afterbegin', text);
}


// insertLast()
function insertLast(node, text) {

  if(typeof node === 'string') node = getNode(node);
  node.insertAdjacentHTML('beforeend', text);
}


// insertAfter()
function insertAfter(node, text) {

  if(typeof node === 'string') node = getNode(node);
  node.insertAdjacentHTML('afterend', text);
}


// insertAfter('h1', template)