import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const [styleProps, setStyleProps] = useState({
    boxShadow: "#5b5b5b 0px 0px 5px 1px",
    color: "#5b5b5b"
  })
  const mapState = ({bankState, power}) => ({
    bank: bankState.bank,
    power: power.powerOn
  })

  const { bank, power } = useSelector(mapState)

  const handleAudoKeyClicked = (sound) => {
    if (power) {
      const el2 = document.getElementById(`drum-pad-${sound.keyTrigger}`)
      el2.classList.add("drum-playing-effect")
  
      const audio = new Audio(sound.url)
      audio.play();
  
      return setTimeout(() => {
        el2.classList.remove("drum-playing-effect")
      }, 100)
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e) {
        console.log(power, 'KEY PRESSED')
        if (power) {
          const el = document.getElementById(e.code.slice(3))
          if (el !== null) {
            const el2 = document.getElementById(`drum-pad-${e.code.slice(3)}`)
            el2.classList.add("drum-playing-effect")
  
            const sound = new Audio(el.src)
            sound.play();
  
            return setTimeout(() => {
              el2.classList.remove("drum-playing-effect")
            }, 100)
          }
        }
      }
    }

    window.addEventListener('keypress', (e) => handleKeyPress(e))

    return window.removeEventListener('keypress', (e) => handleKeyPress(e))
  }, [power])

  useEffect(() => {
    if (power) {
      setStyleProps({
        boxShadow: "#00BCD4 0px 0px 5px 1px",
        color: "#00BCD4"
      })
    } else {
      setStyleProps({
        boxShadow: "#5b5b5b 0px 0px 5px 1px",
        color: "#5b5b5b"
      })
    }
  }, [power])

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      rowGap: "20px",
      columnGap: "20px",
      padding: "40px",
      background: "#191919",
      borderRadius: "20px"
    }}>
      {
        bank.map((sound) => {
          return (
            <div
              id={`drum-pad-${sound.keyTrigger}`}
              onClick={() => handleAudoKeyClicked(sound)}
              className="drum-pad clip"
              style={{
                width: "75px",
                height: "75px",
                borderRadius: "5px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                // boxShadow: "#00BCD4 0px 0px 5px 1px",
                cursor: "pointer",
                // color: "#00BCD4",
                ...styleProps
              }}>
                {sound.keyTrigger}

                <audio
                  id={sound.keyTrigger} 
                  src={sound.url}
                />
            </div>
          )
        })
      }
    </div>
  )
}