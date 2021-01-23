import React from 'react'
import Bank from './Bank'
import InterfaceDisplay from './InterfaceDisplay'
import Power from './Power'
import Volume from './Volume'

export default () => {
  return (
    <div id="display" style={{
      height: "271px",
      padding: "40px",
      width: "265px",
      borderRadius: "20px",
      background: "#191919",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #5b5b5b",
      alignItems: "center",
      justifyContent: "space-evenly",
      position: "relative"
    }}>
      <Power />
      <InterfaceDisplay />
      <Volume />
      <Bank />
    </div>
  )
}