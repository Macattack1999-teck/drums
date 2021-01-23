import React from 'react'
import DrumsButtons from './DrumsButtons'
import DrumsInterface from './DrumsInterface'
import { useSelector } from 'react-redux'

export default () => {
  const mapState = ({bankState, power}) => ({
    bank: bankState.bank,
    power: power.powerOn
  })

  const { power } = useSelector(mapState)

  return (
    <div id="drum-machine" style={{ height: "100%", minHeight: "100vh", width: "100%", minWidth: "100vw", display: "flex", alignItems: "center", justifyContent: "center", background: "#1d1d1d" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "70%",
        borderRadius: "20px",
        boxShadow: "0px 0px 15px 5px #151515eb",
        height: "80vh",
        backgroundColor: "#1f1f1f",
      }}>
        <div id="wire" className={`${power ? "wire-power-on" : ""}`}>
        </div>

        <div style={{
           display: "flex", justifyContent: "space-evenly", alignItems: "center",
        }}>
          <DrumsButtons />
          <DrumsInterface />
        </div>
      </div>
    </div>
  )
}