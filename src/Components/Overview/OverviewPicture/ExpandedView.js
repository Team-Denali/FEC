//import $ from 'jquery';

//const expanded = false

ExpandedView = (url, expanded) => { var div = document.getElementById('ExpandedViewModal');

 if (!expanded) { div.children[0].children[0].src = url; div.style.visibility === 'hidden' ? div.style.cssText = `visibility: visible; animation: all 1s;` : div.style.visibility = 'hidden';   } else { div.children[0].children[0].src = url; div.children[0].children[0].cssText = `animation: all 1s`} //$('#expandedViewModal').show() // console.log('IN EXPANDED:', div, expanded);
}
ZoomView = () => { document.getElementsByClassName('overview-expanded-img')[0].style.transform = `${document.getElementsByClassName('overview-expanded-img')[0].style.transform === 'scale(2.5)' ? document.getElementsByClassName('overview-expanded-img')[0].style.transform = '' : document.getElementsByClassName('overview-expanded-img')[0].style.transform ='scale(2.5)'}` }
module.exports = {ExpandedView, ZoomView}