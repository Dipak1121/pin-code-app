import React from "react";

const PostInfo = ({item, filter})=>{

    console.log(item);
    return(
        <>
        { item.Name.includes(filter) &&
        <div className="post-branch">
            <p>Name: {item.Name}</p>
            <p>Branch Type: {item.BranchType}</p>
            <p>Delivery Status: {item.DeliveryStatus}</p>
            <p>District: {item.District}</p>
            <p>Division: {item.Division}</p>
        </div>
        }
        </>
    )
}

export default PostInfo;