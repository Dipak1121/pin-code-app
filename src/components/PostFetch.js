import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostFetch = ({setPostData, setPincode, pincode})=>{


    // const [pincode,setPincode] = useState("");
    const navigate = useNavigate();

    const baseURL = "https://api.postalpincode.in/pincode/";

    async function findPostOffice(){
        try{
            const response = await axios.get(baseURL + `${pincode}`);
        // console.log(response.data);
            setPostData(response.data);
            navigate("/offices");
        }
        catch(err){
            console.log(err);
        }
        
    }

    return(
        <div>
            <h3>Enter PinCode</h3>
            <input placeholder="Pincode" id="pincode"
            onChange={(e)=>{
                setPincode(e.target.value);
                // console.log(e.target.value);
            }}></input>
            <button id="search-btn"
            onClick={findPostOffice}>Lookup</button>
        </div>
    )
}

export default PostFetch;