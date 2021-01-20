import React from 'react'

export default () => {
  const handleKeyStrokeClick = (letter) => {
    console.log(letter)
  }

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
      <div
        onClick={() => handleKeyStrokeClick('Q')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        Q
      </div>

      <div
        onClick={() => handleKeyStrokeClick('W')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        W
      </div>

      <div
        onClick={() => handleKeyStrokeClick('E')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        E
      </div>

      <div
        onClick={() => handleKeyStrokeClick('A')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        A
      </div>

      <div
        onClick={() => handleKeyStrokeClick('S')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        S
      </div>

      <div
        onClick={() => handleKeyStrokeClick('D')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        D
      </div>

      <div
        onClick={() => handleKeyStrokeClick('Z')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        Z
      </div>

      <div
        onClick={() => handleKeyStrokeClick('X')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        X
      </div>

      <div
        onClick={() => handleKeyStrokeClick('C')}
        className="drum-pad"
        style={{
          width: "75px",
          height: "75px",
          backgroundColor: "#1b1b1b",
          borderRadius: "5px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          boxShadow: "#00BCD4 0px 0px 5px 1px",
          background: "linear-gradient(45deg, #46efd5, #03A9F4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent" 
        }}>
        C
      </div>
    </div>
  )
}