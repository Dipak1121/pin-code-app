import React from "react";
import PostFetch from "./components/PostFetch";
import PostOffices from "./components/PostOffices";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = ()=>{

  const [postData, setPostData] = useState(null);
  const [pincode, setPincode] = useState("");

  return(
    <div>
      <Routes>
        <Route path="/" element={<PostFetch setPostData={setPostData} setPincode={setPincode} pincode={pincode}/>}/>
        <Route path="/offices" element={<PostOffices postData={postData} pincode={pincode}/>}/>
      </Routes>
    </div>
  )
}
export default App;