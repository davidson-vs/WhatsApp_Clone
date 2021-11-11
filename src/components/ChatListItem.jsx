import React from "react"
import "./ChatListItem.css"
export default ({ onClick, active, data }) => {
   return (
      <div
         className={`chatlistitem ${active ? "active" : ""}`}
         onClick={onClick}
      >
         <img src={data.image} alt="avatar" className="chatlist-avatar" />
         <div className="chatlistitem-lines">
            <div className="chatlistitem-line">
               <div className="chatlistitem-name">{data.title}</div>
               <div className="chatlistitem-date">19:00</div>
            </div>
            <div className="chatlistitem-line">
               <div className="chatlistitem-lastMsg">
                  <p>Opa tudo bem?</p>
               </div>
            </div>
         </div>
      </div>
   )
}
