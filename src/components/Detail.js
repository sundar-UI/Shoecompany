import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import {API} from '../mocklink/Apilink'

function Detail(props) {
    
    const [detaildata, setdetaildata] = useState([]);
    const {id} = useParams();

    
         
        const getdata = () => {
            console.log('called')
            // return fetch(API)
            //  .then((response) => response.json())
            //  .then((data) => setdetaildata(data));

            axios.get(API + '/' + id).then((response) => {
                console.log(response)
                setdetaildata(response.data)
            })
        }
    
        useEffect(() => {
            getdata();
        }, []);

        console.log(detaildata)
     

  return (
    <section className = "produts_block">
         <div className="container">
            <div className="product_content">  
                <div className='detailsimg'>
                    <img src={detaildata.image}></img>
                </div>    
                <div className='content'>
               
                <p>{detaildata.brandname}</p>
                 <p>{detaildata.descname}</p>
                </div>
                
                   
                   
                
              
            </div>
         </div>
    </section>
  )
}

export default Detail

// import React, {useState} from "react"
// import {useParams} from "react-router-dom"
// // import productsData from "./Productsdata"
// import {API} from "../mocklink/Apilink"
// import axios from 'axios'

// function ProductDetail() {
//     const {productId} = useParams()
//     const [datacot, setdatacont] = useState([]);
//     const thisProduct = async () =>{
//         const resdata = await axios.get(API);
//         setdatacont(resdata.data);
//     }

//     console.log(thisProduct)
    
//     return (
//         <div>
//             <h1>{thisProduct.brandname}</h1>
//             {/* <p>Price: ${thisProduct.price}</p>
//             <p>{thisProduct.description}</p> */}
//         </div>
//     )
// }

// export default ProductDetail
