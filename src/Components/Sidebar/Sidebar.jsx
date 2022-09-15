import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Sidebar.css";
import {Link } from "react-router-dom";


function Sidebar() {
  const [cats, setCats] =useState([]);

  useEffect(()=>{
     const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
     }
     getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://www.adobe.com/express/create/media_1bcd514348a568faed99e65f5249895e38b06c947.jpeg?width=400&format=jpeg&optimize=medium" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut similique voluptate modi obcaecati soluta officia facilis accusamus.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList"> 
              {cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className="link">
                <li className="siderbarListItem">{c.name}</li>
                </Link>
              ))}        
          </ul> 
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
          <div className="siderbarSocial">
            <i className=" sidebarIcon linkedin fa-brands fa-linkedin"></i>
            <i className=" sidebarIcon fa-brands fa-github"></i>
            <i className="sidebarIcon facebook fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon instagram fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-solid fa-envelope"></i>
            <i className="sidebarIcon twitter fa-brands fa-twitter"></i>
          </div>
          <p>Made with ❤️ by Ajay I. Patel</p>
      </div>
    </div>
  ) 
}

export default Sidebar 
            
 