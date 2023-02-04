import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../mocklink/Apilink'
import {useNavigate} from 'react-router-dom'


function Create() {
    
    const[brandname, setbrandname] = useState('');
    const[descname, setdescname] = useState('');
    const[image, setimage] = useState('');
    const[id, setid] = useState('');

    const navigate = useNavigate();
    
    const postdata = async (event) => {
        event.preventDefault(event);
        await axios.post(API, {
            brandname,
            descname,
            image
        })
        navigate('/list');
    }
    
    
    const uploadimage = async (e) =>{
        const file = e.target.files[0]
        const base64 = await convertbase(file)
        setimage(base64)
    }
    
    const convertbase = (file) => {
        return new Promise((resolve, reject) => {
            const filereader = new FileReader();
            filereader.readAsDataURL(file);

            filereader.onload = (() =>{
                resolve(filereader.result);
            })
            filereader.onerror = ((error) => {
                reject(error);
            })
        })
    }


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
                    <input type="file"  id="change" onChange = {(e) => {uploadimage(e)}}  />
                    <p>Please select File size Below 1MB</p>
                </div>
                <button className="btn btn-danger" onClick = {postdata}>submit</button>
            </form>
        </div>
    </section>
  )
}

export default Create
