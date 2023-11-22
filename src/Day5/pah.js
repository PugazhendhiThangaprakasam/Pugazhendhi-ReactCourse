import React, {useState } from 'react'

const LifeCycle = () => {
    const[resourceType,setResourceType]=useState("COMPONENTS");
    console.log("component mounted",resourceType);
    return (
        <div>
            <button onClick={()=>setResourceType("Component Wil MOUNT")}>Posts</button>
            <button onClick={()=>setResourceType("Component Did MOUNT")}>Users</button>
            <button onClick={()=>setResourceType("Component Will Recieve Props!")}>Comments</button>
            <h2>{resourceType}</h2>
        </div>
    )
}
export default LifeCycle;