import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import React from "react"

export const ButtonComponent = () => {
  const customStyles = { color: "white", fontSize: "1.3rem"}
    return (
      <div>
      <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
      <span style={customStyles}>0</span>
      </div>
    )
  }
  
  export default ButtonComponent
  