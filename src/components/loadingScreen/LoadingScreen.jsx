import React from 'react'

export const LoadingScreen = () => {
  
  return (
    <div className="fixed w-full h-screen bg-black/[.8] z-50">
      <div className="relative h-screen flex flex-col items-center justify-center">
        <img src="https://turismoreal2.s3.amazonaws.com/1.gif" className="h-64" alt="Logo Loading"/>
      </div>
    </div>
  )
}
