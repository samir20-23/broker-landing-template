"use client"

import "./globals.css"

export default function Page() {
  return (
    <div className="mainApp">
      <video
        autoPlay
        loop
        muted
        className="videoBackground"
        onPlay={(e) => {
          e.currentTarget.playbackRate = 0.4
        }}
      >
        <source src="/videobackground/5.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
