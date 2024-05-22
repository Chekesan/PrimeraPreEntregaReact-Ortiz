import React from 'react'

export const ItemListContainer = ({greeting}) => {
  const customStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2.5rem",
    margin: "auto",
    width: "100vw",
    height: "80vh",
  }
  return (
    <div style={customStyles}>{greeting}</div>
  )
}
