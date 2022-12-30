import React, { useEffect, useState } from "react";
import "./pincode.css";
// import Icon from "./Vector.png";
import axios from "axios";
import { Form } from "react-bootstrap";
const Pincode = () => {
  const [details, setDetails] = useState([{}]);
//   const [pin, setPin] = useState();

  const handlePinCodeCheck = (pin) =>{ 
    axios.get(`https://api.postalpincode.in/pincode/${pin}`)
    .then((Response) => {
        if(Response.data ?.[0] ?.PostOffice){
            console.log(Response.data[0].PostOffice);
            setDetails(Response.data[0].PostOffice);
        }else{
            setDetails([{}]);
        }
     
    },);
}
//   const submit =(e)=>{
//     e.peventDefault()
//     setPin(e.target.value)
//   }  
        
  
  return (
    <div className="main">
      <div className="navbar">
        <h5 className="logo">Pin Finder</h5>
        {/* <Form onSubmit={submit}> */}
        <input
          onChange={(e) =>handlePinCodeCheck(e.target.value)}
          
          className="search"
          type="search"
          placeholder=" search"
        />
        {/* </Form> */}
        
      </div>
      <div className="container row">
        {details.map((place,index) => (
          <div className="content col-12 col-md-6 col-lg-4 col-xl-4" key={index}>
            <h3 className="placeheading">{place.Name}</h3>
            <label>BranchType:{place.BranchType}</label>
            <label>District:{place.District}</label>
            <label>District:{place.District}</label>
            <label>Region:{place.Region}</label>
            <label>Block:{place.Block}</label>
            <label>State:{place.State}</label>
            <label>Pincode:{place.Pincode}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pincode;
