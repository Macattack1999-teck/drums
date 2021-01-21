import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togglePower } from '../Redux/Actions/powerAction';

export default () => {
  const dispatch = useDispatch();
  
  const mapStateToProps = (power) => ({
    power: power.power.powerOn,
  })

  const { power } = useSelector(mapStateToProps)

  const handleTogglingPower = () => {
    dispatch(togglePower())
  }

  return (
    <div onClick={handleTogglingPower} className="center">
      <input
        type="checkbox"
        name=""
      />
    </div>
  )
}