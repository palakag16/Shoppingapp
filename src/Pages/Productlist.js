import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Prodcard from "../Components/Prodcard";
import { getProducts } from "../Shared/Services/LoginServices";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Productlist = () => {
  const [prods, setProds] = useState([]);
  const [cart,setCart]=useState([]);
  const navigate=useNavigate();
  const fetchProds = async () => {
    try {
      const resp = await getProducts();
      setProds(resp);
    } catch (error) {
      alert("something is wrong");
    }
  };
  const addTocard = (el) => {
    const check = localStorage.getItem("combonation");
    if(!check){
      navigate("/login")
    }
    setCart([...cart,el])
  };
  useEffect(() => {
    fetchProds();
  }, []);

  return (
    <>
      <Box className="title_cart">
      <Box className="list_title">Combonation Lists</Box>
      <Box sx={{position:"relative",cursor:"pointer"}}>
        <ShoppingCartIcon sx={{position:"absolute"}}/>
        <Typography sx={{position:"absolute", mt: "-0.9rem",ml:" 0.8rem"}}>{cart.length}</Typography>
      </Box>
      </Box>
      <Box className="grid_layout">
        {prods.map((item) => {
          return (
            <Box key={Math.random()*100}>
              <Prodcard el={item} addTocard={addTocard}/>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Productlist;
