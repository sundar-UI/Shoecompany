import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../mocklink/Apilink'
import { Link } from "react-router-dom"

function Products() {
    
    const [apidata, setapidata] = useState([]);

     
    const getdata = () => {
        return fetch(API)
         .then((response) => response.json())
         .then((data) => setapidata(data));
    }

    useEffect(() => {
        getdata();
    }, []);

   


  return (
    <section className = "produts_block">
         <div className="container">
            <div className="pb_head">
                <h1>Go Shoes</h1>
                <p>You Won't Feel the Road! Introducing Power's Duo Foam Max running shoes. Duo Foam Max is Power’s new maximum cushioning running shoe. These performance shoes are designed for your day-to-day runs.</p>
            </div>
            <div className="product_content">
                    
                    
                    { apidata.map((data) => (
                        <div className="product" key={data.id}>
                            <div className="procont">
                                <div className="pro_img">
                                    <img src={data.image} alt="shoe"/>
                                </div>
                                <div className="cont">
                                    <p>{data.brandname}</p>
                                    <p>{data.descname}</p>
                                </div>
                            </div>
                        </div>
                    ))}



                {/* </div> */}
                {/* <div className="product">
                    <a href="javascript:void(0)">
                        <div class="pro_img">
                            <img src="./images/shoe_img1.jpg" alt="shoe"/>
                        </div>
                        <div class="cont">
                            <p>Shoe Name</p>
                            <p>For styling look and get confidence to you</p>
                        </div>
                    </a>
                </div>
                <div className="product">
                    <a href="javascript:void(0)">
                        <div class="pro_img">
                           <img src="./images/shoe_img2.jpg" alt="shoe"/>
                        </div>
                        <div class="cont">
                            <p>Shoe Name</p>
                            <p>For styling look and get confidence to you</p>
                        </div>
                    </a>
                </div>
                <div className="product">
                    <a href="javascript:void(0)">
                        <div class="pro_img">
                           <img src="./images/shoe_img3.jpg" alt="shoe"/>
                        </div>
                        <div class="cont">
                            <p>Shoe Name</p>
                            <p>For styling look and get confidence to you</p>
                        </div>
                    </a>
                </div> */}
            </div>
         </div>
    </section>
  )
}

export default Products
