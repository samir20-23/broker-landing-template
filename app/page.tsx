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
        <source src="/videoBackground/4.mp4" />
      </video>

      <nav className="navBar">
        <div className="logo">Liquid Brokers</div>
        <div className="menu">
          <a href="" className="about" >About</a>
          <a href="" className="trading" >Trading</a>
          <a href="" className="contant" >Contact</a>
          <a href="" className="faq" >FAQ</a>
        </div>
        <div className="register">
          <button className="Login">Login</button>
          <button className="Signup">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}
