import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Prodcard = ({el,addTocard}) => {
   
  return (
    <>
      <Box className="prodcard_box">
        <img
          src={el?.image||"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
          alt="img"
          width="90%"
          height="200px"
        ></img>
        <Typography sx={{textAlign:"center",mt:0.4}} className="fs_18">{el?.title.slice(0,15)}</Typography>
        <Typography className="fs_18" sx={{my:0.8}}>	&#8377;{el?.price}</Typography>
      
        <Typography className="add_delbox" onClick={()=>addTocard(el)}>+Add</Typography>
      </Box>
    </>
  );
};

export default Prodcard;
