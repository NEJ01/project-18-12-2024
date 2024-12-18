
import React, { useEffect, useState } from 'react';
import Sidebar from '../home/Sidebar';
import  {Topbar} from '../home/Topbar';
import { Button, TextField } from '@mui/material';
import './Food.css';
import axios from 'axios';
import baseurl from '../../Api';

const Food = () => {

  var [inputs,setInputs]=useState({"Fname":'',"Description":'',"Price":'',"Category":'',"Status":'ACTIVE'})
  var[category,setCategory] = useState([]);

  const inputhandler =(event)=> {
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
}

useEffect(()=>{
        
  axios.get(baseurl + "/Category/Cview")
  .then(response =>{
      console.log(response.data)
      setCategory(response.data)
  })
  .catch(err=>console.log(err))
},[])

const handleimage =(event)=>{
  const file = event.target.files[0];
  inputs.photo=file;
}

// const savedata =()=>{
//   const formdata = new FormData();
//   formdata.append('Fname',inputs.Fname);
//   formdata.append('Description',inputs.Description);
//   formdata.append('Price',inputs.Price);
//   formdata.append('Cid',inputs.Cid);
//   formdata.append('Status',inputs.Status);
//   formdata.append('photo',inputs.photo);


//   fetch(baseurl+'/Food/Fnew',
//   {method:'post',body:formdata,})
//   .then((response)=>response.json())
//   .then((data)=>{
//       alert("record saved")
//   })
//   .catch((err)=>{
//      console.log("error")
//   })

// }
const savedata = () => {
  const formdata = new FormData();
  formdata.append('Fname', inputs.Fname);
  formdata.append('Description', inputs.Description);
  formdata.append('Price', inputs.Price);
  formdata.append('Cid', inputs.Cid);
  formdata.append('Status', inputs.Status);
  formdata.append('photo', inputs.photo);

  fetch(baseurl + '/Food/Fnew', {
    method: 'POST',
    body: formdata,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      alert('Record saved');
    })
    .catch((err) => {
      console.error('Error:', err);
      alert('Failed to save record');
    });
};



  return (
    <div className='products-container'>
      <Topbar />
      <Sidebar />
      <div className='form-container'>
        <h1>TO ADD A NEW FOOD</h1>

       
        <div className='form-group'>
          <label htmlFor="Fname">Food Name:</label>
          <TextField variant="filled" name="Fname" id="Fname" value={inputs.Fname}  onChange={inputhandler} />
        </div>

        <div className='form-group'>
          <label htmlFor="Description">Description:</label>
          <TextField variant="filled" name="Description" id="Description" value={inputs.Description}  onChange={inputhandler} />
        </div>

        <div className='form-group'>
          <label htmlFor="Price">Price:</label>
          <TextField variant="filled" name="Price" id="Price" value={inputs.Price}  onChange={inputhandler}/>
        </div>

        <div className='form-group'>
          <label htmlFor="Cid">Category:</label>
          <select name="Cid" id="Cid" value={inputs.Cid}  onChange={inputhandler}>
          {
            category.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Cname}</option>
                )


            })
        }
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="Pphoto">Photo:</label>
          <input type="file" onChange={handleimage}/>

        </div> 
        Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>

        <Button variant="outlined" className='save-button' onClick={savedata}>Save</Button>
      </div>
    </div>
  );
}

export default Food;
