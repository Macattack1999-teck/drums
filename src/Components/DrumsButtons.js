import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const mapState = ({bankState}) => ({
    bank: bankState.bank,
  })

  const { bank } = useSelector(mapState)

  const handleAudoKeyClicked = (sound) => {
    const audio = new Audio(sound.url)
    audio.play();
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e) {
        const el = document.getElementById(e.code.slice(3))
        if (el !== null) {
          const sound = new Audio(el.src)
          sound.play();
        }
      }
    }

    window.addEventListener('keypress', (e) => handleKeyPress(e))

    return window.removeEventListener('keypress', (e) => handleKeyPress(e))
  }, [bank])

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
              onClick={() => handleAudoKeyClicked(sound)}
              className="drum-pad clip"
              style={{
                width: "75px",
                height: "75px",
                backgroundColor: "#1b1b1b",
                borderRadius: "5px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                boxShadow: "#00BCD4 0px 0px 5px 1px",
                cursor: "pointer",
                background: "linear-gradient(45deg, #46efd5, #03A9F4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent" 
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