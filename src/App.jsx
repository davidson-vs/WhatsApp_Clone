import React, { useState } from "react"
import "./App.css"
////// icons/////
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchIcon from "@material-ui/icons/Search"
/////  components/////
import ChatListItem from "./components/ChatListItem"

export default function App(props) {
   const [chatlist, setChatlist] = useState([{}, {}, {}, {}])
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
                  <div className="header-btn">
                     <DonutLargeIcon style={{ color: "#919191" }} />
                  </div>
                  <div className="header-btn">
                     <ChatIcon style={{ color: "#919191" }} />
                  </div>
                  <div className="header-btn">
                     <MoreVertIcon style={{ color: "#919191" }} />
                  </div>
               </div>
            </header>

            <div className="search">
               <div className="search-input">
                  <SearchIcon
                     fontSize="small"
                     style={{ color: "#919191" }}
                  ></SearchIcon>
                  <input
                     type="search"
                     placeholder="Procurar ou começar uma nova  conversa"
                  />
               </div>
            </div>
            <div className="chatlist">
               {chatlist.map((item, key) => (
                  <ChatListItem key={key} />
               ))}
            </div>
         </div>
         <div className="content-area">...</div>
      </div>
   )
}
