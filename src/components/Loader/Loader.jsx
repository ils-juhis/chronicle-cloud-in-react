import { CircularProgress } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <div
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 10000,
            backgroundColor: "#FFF",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "auto",
            marginBottom: "auto",
        }}
    >
        <CircularProgress
            size="6rem"
            style={{
                color: "#e8eaef",
                margin: 0,
                padding: 0,
            }}
        />
    </div>
  )
}

export default Loader