import React, { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/action/action";
const Cards = () => {

    const [data,setdata]=useState(Cardsdata);
    // console.log(data);


    const dispatch=useDispatch();

    const Send=(e)=>{
        console.log(e);
        dispatch(ADD(e));


    }

    
  return (
    <div className="container mt-3">
      <h3 className="text-center">Add to Cart projects</h3>
      <div className="row d-flex justify-content-center align-items-center">

        {data.map((elements,index)=>{
            return(
                <Card style={{ width: "22rem",border:"none"}} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" src={elements.imgdata}  style={{height:"16rem"}} className="p-2 rounded"/>
                <Card.Body>
                  <Card.Title>{elements.rname}</Card.Title>
                  <Card.Text>
                    Price:- ₹ {elements.price}
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center align-items-center">
                  <Button variant="primary" className="col-lg-12 shadow" onClick={()=>Send(elements)}>Add to Cart</Button>

                  </div>
                </Card.Body>
              </Card>
            )
        })}

      </div>
    </div>
  );
};

export default Cards;
