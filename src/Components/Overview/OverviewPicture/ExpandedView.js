//import $ from 'jquery';



ExpandedView = (url, styleView) => {

 var div = document.getElementById('ExpandedViewModal'); div.children[0].children[0].src = url; div.style.visibility === 'hidden' ? div.style.visibility = 'visible' : div.style.visibility = 'hidden';//$('#expandedViewModal').show()
}

module.exports = ExpandedView