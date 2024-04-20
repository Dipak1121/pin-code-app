import React, { useState } from "react";
import PostInfo from "./PostInfo";

const PostOffices = ({postData, pincode})=>{

    console.log(postData);
    // console.log(postData[0].Message);
    const [filter, setFilter] = useState("");

    return(
        <div>
            <h3>Pincode: {pincode}</h3>
            {postData && <h3>Message: {postData[0].Message}</h3>}
            {postData && <input id="filter" placeholder="Filter" onChange={(e)=>{setFilter(e.target.value)}}/>}
            <div className="post-offices">
            {postData && postData[0].PostOffice &&
            postData[0].PostOffice.map((item, index)=>{
                return(<PostInfo key={index} item={item} filter={filter}/>)
            })}
            </div>
        </div>
    )
}

export default PostOffices;