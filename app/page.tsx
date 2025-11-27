"use client"

import "./globals.css"

export default function Page() {
    const value = "46"
    const value2 = "96"

    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </head>

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
                    <source src="/videoBackground/2.mp4"/>
                </video>

                <nav className="navBar">
                    <div className="logo">Liquid Brokers</div>
                    <div className="menu">
                        <a href="" className="about">About</a>
                        <a href="" className="trading">Trading</a>
                        <a href="" className="contant">Contact</a>
                        <a href="" className="faq">FAQ</a>
                    </div>
                    <div className="register">
                        <button className="Login">Login</button>
                        <button className="Signup">Sign Up</button>
                    </div>
                </nav>

                <div className="heroContent">
                    <p>Elevate Your Trading Experience</p>
                    <span>Unlock your trading potential in a fully regulated environment powered by Liquid Brokers</span>
                    <button className="heroBtn">Sign Up & Trade</button>
                </div>

                <div className="dragSection">
                    <div className="drag1">
                        <div className="header1">
                            <p>Trading Pairs</p>
                            <button className="dragBtn">
                                <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="header2">
                            <p>Unparalleled Market Access</p>
                            <span>{value}%</span>
                        </div>
                    </div>

                    {/*  */}
                    <div className="drag2">
                        <div className="header1">
                            <p>Trading Pairs</p>
                            <button className="dragBtn">
                                <i className="fa fa-line-chart" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="header2">
                            <p>{value2}%</p>
                            <span><i className="fa fa-pie-chart" aria-hidden="true"/></span>
                        </div>
                    </div>
                </div>

            </div>
        </html>
    )
}
