import React, { useContext }  from "react";
import { UserContext } from "./ContextAPI/Context";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export  const Detail = ()=>{

    const {id} = useContext(UserContext)
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/")
    }


    return(
       <Box>
        <Box >
        <Typography sx={{padding:"10px 20px", backgroundColor:"blue", color:"white", textAlign:"center"}}>Detail page</Typography>
        <button style={{padding:"10px 30px", backgroundColor:"blue", color:"white", border:"0.2px solid blue", margin:"50px 100px", cursor:"pointer"}} onClick={handleClick}>Back</button>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", margin:"20px auto", width:"80%"}}>
            <Box sx={{display:"flex", flexDirection:"row",}}>
                <Typography sx={{color:"gray", fontSize:"15px", pr:"30px"}} >Title : </Typography>
                <Typography>{id.title}</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row",}}>
                <Typography sx={{color:"gray", fontSize:"15px", pr:"30px"}} >Points : </Typography>
                <Typography>{id.points}</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row",}}>
                <Typography sx={{color:"gray", fontSize:"15px", pr:"30px"}} >Children : </Typography>
                <Typography sx={{display:"flex", flexDirection:"column", margin:"10px auto", gap:"2px"}}>
                {
                    id.children.map((data, index)=>{
                        return(
                            <Typography>{data}</Typography>
                        )
                    })
                }
            </Typography>
                
            </Box>
            
            

        </Box>

        
       </Box>

    )
}