import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { interfaceDisplayActions } from '../Redux/Actions/interfaceDisplayActions';
import { togglePower } from '../Redux/Actions/powerAction';

export default () => {
  const dispatch = useDispatch();
  
  const mapStateToProps = ({interfaceDisplayText}) => ({
    text: interfaceDisplayText.interfaceDisplayText
  })
  
  const { text } = useSelector(mapStateToProps)

  const handleTogglingPower = () => {
    dispatch(interfaceDisplayActions("TEST"))
  }
  
  return (
    <div onClick={handleTogglingPower} style={{ width: "80%", height: "20%", background: "#1f1f1f", borderRadius: "5px" }}>
      {text}
    </div>
  )
}