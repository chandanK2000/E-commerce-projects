import React from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

const CardDetails = () => {

    const {id}=useParams();
    console.log(id);
  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details page</h2>

      <section className="container mt-3 ">
        <div className="iteamsdetails">
          <div className="items_img">
            <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" style={{height:"16rem"}} className="p-2 rounded"  alt=".."/>
          </div>
    
        <div className="details">
          <Table>
            <tr>
              <td>
                <p><strong> Resturant </strong> Masalla Theorry</p>
                <p><strong>Price </strong> ₹ 300</p>
                <p><strong>Dishes </strong> North Indian Biryani Mughlai</p>
                <p><strong>Total </strong> ₹ 300</p>

              </td>
              <td>
                <p><strong>Rating  </strong><span  className="ratings" style={{color:"#fff",padding:"2px 5px",borderRadius:"5px"}}></span>3.5 ★</p>

                <p><strong>Order Review </strong><span></span>1175 + order placed from here recently </p>

                <p><strong>Remove :</strong><span><i className="fas fa-trash" style={{color:"red",cursor:"pointer",fontSize:"20px"}}></i></span></p>

              </td>
            </tr>
          </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
