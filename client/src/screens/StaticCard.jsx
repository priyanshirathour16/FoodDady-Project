import React from "react";
import "./StaticCard.css"

const StaticCard = () => {
  return (
    <div className="static_card_section">
      <div className="static_card_container">
        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  alt= "img"/>
        <div className="bottom_section">
            <h2>Professional Level</h2>
            <p> They manage all kitchen activities and oversee each chef and cook to ensure they complete their tasks efficiently.cook during normal operating hours but they often help create menus, review final plate presentations and taste dishes before the waitstaff takes them to customers. </p>
        </div>
      </div>
      <div className="static_card_container con_1">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"  alt= "img"/>
        <div className="bottom_section">
            <h2>Fresh Food Guranted</h2>
            <p> Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits Dairy products are fresh and will spoil quickly. Thus, fresh cheese is cheese which has not been dried or salted for aging. Sour cream may be considered "fresh" (crème fraîche). </p>
        </div>
      </div>

      <div className="static_card_container con_1">
        <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  alt= "img"/>
        <div className="bottom_section">
            <h2>The menu is plentyFull</h2>
            <p>Just like the cuisine you serve and the ambiance you create, your menu reflects the quality of your restaurant and influences the choices your customers make. Menus should always be easy to read, clean, and up-to-date.  </p>
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
