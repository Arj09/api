import React, { useContext, useEffect, useState }  from "react";
import {Box} from '@mui/material'
import axios from 'axios'
import { UserContext } from "./ContextAPI/Context";

import { useNavigate } from "react-router-dom";

export  const View = ()=>{

    const [data, setData] = useState()
    const [search, setSearch] = useState('unavailable')
    const navigate = useNavigate()
    const { setID} = useContext(UserContext)
    useEffect(()=>{
        axios.get('http://hn.algolia.com/api/v1/search?query=test').then((res)=>{
            //console.log(res.data)
            setData(res.data.hits)
        }).catch((err)=>{
            console.log(err)
        })
        
    },[])
    console.log(data)

    const handleID =(id)=>{
        setID(id)
        navigate("/detail")

    }
   
    return(
        <Box>
            <Box sx={{display:"flex",backgroundColor:"blue", height:"80px", margin:"2px auto", justifyContent:"center", alignItems:"center"}}>
                 <input    onChange={(e)=>setSearch(e.target.value)}        style={{height:'30px', width:"60%", borderRadius:"2px", border:"none", padding:"5px"}} placeholder=" Search by title name" />
            </Box>

            <Box sx={{width:"80%", margin:"20px auto", gap:"10px 0"}}>
            {
                data && data
                .filter((data)=>(data.title.toLowerCase().startsWith(search.toLowerCase())))
                .map((data, index)=>{
                    return(
                        <div key={index} style={{padding:"10px 0", cursor:"pointer"}}   onClick={()=>handleID(data)}>{data.title}</div>
                    )
                })
            }
            </Box>
            




        </Box>
       

    )
}