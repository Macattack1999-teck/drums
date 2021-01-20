import react from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bankActions } from '../Redux/Actions/bankActions';

export default () => {
  const dispatch = useDispatch();
  const mapState = ({bankState}) => ({
    bankTwoActive: bankState.bankTwoActive,
  })

  const { bankTwoActive } = useSelector(mapState)

  const handleChangingBank = () => {
    dispatch(bankActions());
  }

  return (
    <div onClick={handleChangingBank}>
      {
        bankTwoActive ? 
       "ON" : "OFF"
      }
    </div>
  )
}