import React from 'react'
import DrumsButtons from './DrumsButtons'
import DrumsInterface from './DrumsInterface'

export default () => {
  return (
    <div id="drum-machine" style={{ height: "100%", minHeight: "100vh", width: "100%", minWidth: "100vw", display: "flex", alignItems: "center", justifyContent: "center", background: "#1d1d1d" }}>
      <div style={{
        display: "flex", justifyContent: "space-evenly", alignItems: "center",
        width: "70%",
        borderRadius: "20px",
        boxShadow: "0px 0px 15px 5px #151515eb",
        height: "80vh",
        backgroundColor: "#1f1f1f",
      }}>
        <DrumsButtons />
        <DrumsInterface />
      </div>
    </div>
  )
}