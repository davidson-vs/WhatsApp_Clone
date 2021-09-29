import React from "react"
import "./App.css"
export default function App(props) {
   return (
      <div className="app-window">
         <div className="sidebar">
            <header>
               <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU"
                  alt="perfil"
                  className="header-avatar"
               />
               <div className="header-buttons">
                  <div className="header-btn"></div>
               </div>
            </header>

            <div className="search">...</div>
            <div className="chat">...</div>
         </div>
         <div className="content-area">...</div>
      </div>
   )
}
