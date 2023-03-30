//import $ from 'jquery';

//const expanded = false

ExpandedView = (url, expanded) => { var div = document.getElementById('ExpandedViewModal'); console.log('EXPANDED VIEW: ', div.children[0].children[0].backgroundImage, url)

 if (!expanded) { div.children[0].children[0].cssText = `background-image: url(${url})`; div.style.visibility === 'hidden' ? div.style.cssText = `visibility: visible; z-index: 100; animation: all 1s; cursor: 'default';` : div.style.visibility = 'hidden';   } else { div.children[0].children[0].backgroundImage = `url(${url})`; } //$('#expandedViewModal').show() // console.log('IN EXPANDED:', div, expanded);
}
// ZoomView = () => { document.getElementsByClassName('overview-expanded-img')[0].style.transform = `${document.getElementsByClassName('overview-expanded-img')[0].style.transform === 'scale(2.5)' ? document.getElementsByClassName('overview-expanded-img')[0].style.transform = '' : document.getElementsByClassName('overview-expanded-img')[0].style.transform ='scale(2.5)'}` }
module.exports = {ExpandedView}