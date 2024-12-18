import {
    Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Typography,} from "@mui/material";
  import React, { useEffect, useState } from "react";
  import   {Topbar}  from '../home/Topbar'

  import Sidebar from "../home/Sidebar";
  import "./Foodview.css";
  import axios from "axios";
  import baseurl from '../../Api';
  import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
  import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
  import Foodedit from "./Foodedit";
  import {Buffer} from 'buffer';
  
  const Foodview = () => {
      var[Food,setFood] = useState([]);
      var[selected,setSelected] = useState();
      var[update,setUpdate] = useState(false);
  
  
      useEffect(()=>{
          axios.get(baseurl + "/Food/Foodview")
          .then(response =>{
              console.log(response.data)
              setFood(response.data)
              console.log(response.data)
          })
          .catch(err=>console.log(err))
      },[])
  
      const deletevalues =(id)=>{
          console.log("deleted",id)
          axios.put(baseurl+"/Food/updatestatus/"+id)
          .then((response)=>{
              alert("DELETED")
          window.location.reload(false);
          })
      }
  
      const updatevalues =(value)=>{
          console.log("updated",value);
          setSelected(value);
          setUpdate(true);
          }
         
          var result=
          <div>
          <Topbar />
          <Sidebar />
    
        <div className="bb"> 
        <Typography>FOOD VIEW</Typography><br/><br/>
    <TableContainer>
    <Table >
      <TableHead>
        <TableRow>
         
          <TableCell >Food Name</TableCell>
          <TableCell >Description</TableCell>
          <TableCell >Price</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Photo</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Edit</TableCell>
          <TableCell>Delete</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {Food.map((value,index)=>{
              return(
                  <TableRow key={index}>
                   
                      <TableCell>{value.Fname}</TableCell>
                      <TableCell>{value.Description}</TableCell>
                      <TableCell>{value.Price}</TableCell>
                      <TableCell>
                        {/* {value.ffood[0].Cname} */}
                        </TableCell>
                      <TableCell><img 
                      src={`data:image/jpeg;base64,${Buffer.from(value.photo.data).toString()}`} 
                      width="50" height="50" alt='Error' /></TableCell>
                      <TableCell>{value.Status}</TableCell>
                      <TableCell><ModeEditOutlineIcon color='success' onClick={()=>updatevalues(value)}/></TableCell>
                      <TableCell><DeleteForeverIcon color='error' onClick={()=>deletevalues(value._id)}/></TableCell>
                  </TableRow>
              )
          })} 
      </TableBody>
    </Table>
    </TableContainer>
        </div>
        </div>
  
  if(update)
      {
        result=<Foodedit data={selected} method='put'/>
      }
  return (result)
  };
  
  export default Foodview;
  