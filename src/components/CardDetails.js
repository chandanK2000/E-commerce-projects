import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";

import { DEL} from "../redux/action/action";
import { ADD } from "../redux/action/action";
import { useDispatch } from "react-redux";
const CardDetails = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();

  const [price,setprice]=useState(0);

  console.log(price);
  // console.log(id);

  const getdata = useSelector((state) => state.CartReducer.carts);
  console.log(getdata);



  const history=useNavigate();

  const Compare = () => {
    let comaparedata = getdata.filter((e) => {
      return e.id == id;
    });
    // console.log(comaparedata);
    setdata(comaparedata);
  };

  useEffect(() => {
    Compare();
  },[id]);

// for add

const Send=(e)=>{
  console.log(e);
  dispatch(ADD(e));


}
  // for delete functionality;

  const dispatch=useDispatch()
  const del=(id)=>{
    dispatch(DEL(id));
    history("/");
  }


  //FOR REMOVE one


  // const remove=(id)=>{
  //   dispatch(REMOVE(id))
  // }

 
 
  
  
  

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details pages</h2>

      <section className="container mt-3 ">
        <div className="iteamsdetails">
          
          {
            data.map((ele,index)=>{
              return(
                <>
                <div className="items_img">
            <img
              src={ele.imgdata}
              style={{ height: "16rem" }}
              className="p-2 rounded"
              alt=".."
            />
          </div>

          <div className="details">
            <Table>
              <tr>
                <td>
                  <p>
                    <strong> Resturant </strong>{ele.rname}
                  </p>
                  <p>
                    <strong>Price </strong> ₹ {ele.price}
                  </p>
                  <p>
                    <strong>Dishes </strong> {ele.address}
                  </p>
                  <p>
                    <strong>Total </strong> ₹ 300
                  </p>
                  <div className="mt-5 d-flex justify-content-around align-items-center" style={{backgroundColor:"orange",color:"#ddd",width:"100px",cursor:"pointer",borderRadius:"6px"}}>
                    <span style={{fontSize:"24px"}} > -  </span>
                    <span style={{fontSize:"22px"}}> {ele.qnty} </span>
                    <span style={{fontSize:"24px"}} onClick={()=>Send(ele.id)}> + </span>

                  </div>
                </td>
                <td>
                  <p>
                    <strong>Rating </strong>
                    <span
                      className="ratings"
                      style={{
                        color: "#fff",
                        padding: "2px 5px",
                        borderRadius: "5px",
                      }}
                    ></span>
                {ele.rating}
                  </p>

                  <p>
                    <strong>Order Review:- </strong>
                    <span></span>{ele.somedata}
                  </p>

                  <p>
                    <strong>Remove :</strong>
                    <span>
                      <i
                        className="fas fa-trash"
                        style={{
                          color: "red",
                          cursor: "pointer",
                          fontSize: "20px",
                        }}

                        onClick={()=>del(ele.id)}
                      ></i>
                    </span>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
                </>
              )
            })
          }
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
