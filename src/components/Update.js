import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {API} from '../mocklink/Apilink'
import {useNavigate} from 'react-router-dom'

function Update() {
    
    const[brandname, setbrandname] = useState('');
    const[descname, setdescname] = useState('');
    const[image, setimage] = useState('');
    const[id, setid] = useState('');
    const navigate = useNavigate();


    const updatedata = async (event) => {
        event.preventDefault(event);
        await axios.put(`https://63dd11f2df83d549ce99ee75.mockapi.io/pro/${id}`, {
            brandname,
            descname,
            image
        })
        navigate('/list');
    }

    useEffect(() =>{
        setbrandname(localStorage.getItem('brandname'))
        setdescname(localStorage.getItem('descname'))
        setimage(localStorage.getItem('image'))
        setid(localStorage.getItem('ID'))
        
    }, [])

  return (
    <section className = "create">
        <div className="container">
            <h2>Add new product</h2>
            <form className="create_form">
                <div className="field">
                    <label>Brand Name :</label>
                    <input type="text" value = {brandname} onChange = {event => setbrandname(event.target.value)}  />
                </div>
                <div className="field">
                    <label>Description :</label>
                    <textarea value={descname} onChange={event => setdescname(event.target.value)} />
                </div>
                <div className="field">
                    <label>Image upload :</label>
                    <input type="file" id="change" onChange = {event => setimage(event.target.files)}  />
                </div>
                <button className="btn btn-danger" onClick={updatedata}>update</button>
            </form>
        </div>
    </section>
  )
}

export default Update
