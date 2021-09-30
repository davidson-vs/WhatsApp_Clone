import React, { useState } from "react"
import "./App.css"
////// icons/////
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchIcon from "@material-ui/icons/Search"
/////  components/////
import ChatListItem from "./components/ChatListItem"
import ChatIntro from "./components/ChatIntro"
import ChatWindow from "./components/ChatWindow"

//////////////////////////////////////////////////////////////////////////////////
export default function App(props) {
   const [activeChat, setActiveChat] = useState({})

   const [chatList, setChatList] = useState([
      {
         chatId: 1,
         title: "Davidson Vieira ",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU",
      },
      {
         chatId: 2,
         title: "Davidson Vieira ",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU",
      },
      {
         chatId: 3,
         title: "Davidson Vieira ",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU",
      },
      {
         chatId: 4,
         title: "Davidson Vieira ",
         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU",
      },
   ])

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
               {chatList.map((item, key) => (
                  <ChatListItem
                     key={key}
                     active={activeChat.chatId === chatList[key].chatId}
                     onClick={() => setActiveChat(chatList[key])}
                  />
               ))}
            </div>
         </div>
         <div className="content-area">
            {activeChat.chatId !== undefined && <ChatWindow></ChatWindow>}
            {activeChat.chatId === undefined && <ChatIntro />}
         </div>
      </div>
   )
}
