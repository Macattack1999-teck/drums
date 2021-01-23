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
    <div onClick={handleChangingBank} className="center" style={{
    display: "flex"
  }}>
    <div style={{
      fontSize: "14px",
      paddingRight: "20px",
      display: "flex",
      alignItems: "center",
      color: "#5b5b5b"
    }}>
      Bank Two
    </div>

    <input
      type="checkbox"
      name=""
    />
  </div>
  )
}