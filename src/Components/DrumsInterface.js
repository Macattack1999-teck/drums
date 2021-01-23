import React from 'react'
import Bank from './Bank'
import InterfaceDisplay from './InterfaceDisplay'
import { useSelector } from 'react-redux'
import Power from './Power'
import Volume from './Volume'

export default () => {
  const mapState = ({bankState, power}) => ({
    bank: bankState.bank,
    power: power.powerOn
  })

  const { power } = useSelector(mapState)

  return (
    <div id="display" className={`${power ? "display-power-on" : ""}`} style={{
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