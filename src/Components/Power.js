import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togglePower } from '../Redux/Actions/powerAction';

export default () => {
  const dispatch = useDispatch();
  
  const handleTogglingPower = () => {
    dispatch(togglePower())
  }

  return (
    <div className="center" style={{
      display: "flex"
    }}>
      <div style={{
        fontSize: "14px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "center",
        color: "#00BCD4"
      }}>
        Power
      </div>

      <input
        onClick={handleTogglingPower} 
        type="checkbox"
        name=""
      />
    </div>
  )
}