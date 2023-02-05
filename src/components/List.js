import React, {useState, useEffect} from 'react'
import {API} from '../mocklink/Apilink'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function List() {
    
    const [listdata, setlistdata] = useState([]);
    const navigate = useNavigate();
    
       
        const update = ({brandname, descname, image, id}) =>{
            localStorage.setItem('ID', id)
            localStorage.setItem('brandname', brandname)
            localStorage.setItem('descname', descname)
            localStorage.setItem('image', image)
            
            navigate('/update')
        }

        const deletedata = async (id) => {
            await axios.delete(`https://63dd11f2df83d549ce99ee75.mockapi.io/pro/${id}`)
            getlistdata()

        }
         
        const getlistdata = async () => {
            console.log('get api')
            await axios.get(API).then((response)=>{
                console.log(response)
                setlistdata(response.data)
            }).catch((response)=>{
                console.log(response.message)
            })
            // return fetch(API)
            //  .then((response) => response.json())
            //  .then((data) => setlistdata(data));
        }
    
        useEffect(() => {
            getlistdata();
        }, []);

        


  return (
    <section className = "list">
         <div className="container">
            <table className="list_content">
                <thead>
                    <tr>
                        <th className="brandname">Brand Name</th>
                        <th className="description">Description</th>
                        <th className="pro_img">Item Image</th>
                        <th className="delete">Delete</th>
                        <th className="update">Update</th>
                    </tr>
                </thead>
                <tbody>
                { listdata.map((data) => (
                    <tr className="product" key={data.id}>
                        <td className="brandname">
                            <p>{data.brandname}</p>
                        </td>
                        <td className="description">
                            <p>{data.descname}</p>
                        </td>
                        <td className="pro_img">
                            <img src={data.image} alt="shoe"/>
                        </td>
                        <td className="delete">
                            <button onClick = {() => deletedata(data.id) }>Delete</button>
                        </td>
                        <td className="update">
                            <button onClick = {() => update(data)}>Update</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
         </div>
    </section>
  )
}

export default List

