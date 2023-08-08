import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
function App() {
  const [a,setA]=useState("")
  const incre=(e)=>{
    e.preventDefault();
    setA(a+1);
  }
  const decre=(e)=>{
    e.preventDefault();
    setA(a-1);
  }
  const [data,setData]=useState([])
  useEffect(()=>{
     const handle=async()=>{
        try{
          const response=await axios.get("http://localhost:8000/users");
          setData(response);
        }
         catch(e){
          console.log(e);
         }
     }
     handle();
  },[])
  return (
    <div>
      {
         data.map((item)=>{
             <div key={item.id}>
                <h5>{item.name}</h5>
             </div>
         })
      }
    </div>
  )
}

export default App
