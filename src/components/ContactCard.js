import React from "react";
import Logo from "../images/nepa_logo.png";

const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
      <div className="item">
        {/* <img 
        className="ui avatar image" 
        src= {Logo} 
        alt="avatar" 
        /> */}
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <span
        role="img"
        aria-label="delete"
        style={{color: "red", marginTop: "7px", cursor: "pointer"}}
        onClick={() => props.clickHandler(id)}
      >
        🗑️
      </span>
      </div>
    );
};

export default ContactCard;