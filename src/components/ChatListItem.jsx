import React from "react"
import "./ChatListItem.css"
export default () => {
   return (
      <div className="chatlistitem">
         <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU"
            alt="avatar"
            className="chatlist-avatar"
         />
         <div className="chatlistitem-lines">
            <div className="chatlistitem-line">
               <div className="chatlistitem-name">Davidson Vieira</div>
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
