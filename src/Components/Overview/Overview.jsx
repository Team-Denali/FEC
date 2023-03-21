import React from 'react'; import axios from 'axios';// Bring React in to build a component.

import {useState, useEffect} from 'react'; import OverviewMainPic from './OverviewPicture/OverviewMainPic.jsx';

import OverviewStyles from './OverviewInfo/OverviewStyles.jsx'; import OverviewCart from './OverviewInfo/OverviewCart.jsx'; // Huzzah for jsx!

var Overview = ({current}) => { console.log(current, 'current prop')//include state variables for currently viewed product
const [itemView, setItemView] = useState({}); const [styles, setStyles] = useState({}); const [loading, setLoading] = useState(true); let url = 'http://localhost:3000'; //console.log('the ID:', current.id) //const [styleIndex, setIndex] = useState(0); const [photoIndex, setPhotoIndex] = useState(0);
// useEffect(() => { let id = current.id; console.log('THE ID:', id); let paramObj = { product_id: current.id };
//   return axios.get(`${url}/styles`, { params: paramObj } ).then((res) => { console.log(res.data); setStyles(res.data); console.log('newStylesStatesss:', styles)} ).catch((err) => {console.log('axios req error:', err)})


// }, [])
const styleFinder = (currentId) => { let styleId = currentId; console.log('THE ID:', styleId); let paramObj = { product_id: styleId };
  axios.get(`${url}/styles`, { params: paramObj } ).then((res) => { console.log( 'the data:', res.data); setStyles(res.data.results); } ).catch((err) => {console.log('axios req error:', err)})


}
useEffect(() => {styleFinder(current.id); }, [current])

console.log('THE STYLES:', styles);//className="productOverviewPic"
// if (loading) {



// return (<div>STILL LOADING...</div>) }


return (// }

<> <div className="overviewContainer">

  <div className="overviewTop">

    <OverviewMainPic currentStyle={styles}/>







    <div className="overviewProductInfo">
      <div>Review Stuff Goes Here</div>

      <div>{current.category}</div>
      <div className='productName'><h1>{current.name}</h1></div>

      <div className='overviewStyles'><OverviewStyles overviewStyles={styles}/></div>
      <div className="overviewCart"><OverviewCart/></div>

    </div>
  </div>
    <div className='overviewBottom'>

      <div>{current.description}</div>
      <div>||</div>
      <div>Insert Specs</div>
    </div>

  </div>

  </>)
}

export default Overview