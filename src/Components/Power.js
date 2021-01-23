import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togglePower } from '../Redux/Actions/powerAction';

export default () => {
  const dispatch = useDispatch();
  const mapState = ({bankState, power}) => ({
    bank: bankState.bank,
    power: power.powerOn
  })

  const { power } = useSelector(mapState)
  
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
        color: "#5b5b5b"
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