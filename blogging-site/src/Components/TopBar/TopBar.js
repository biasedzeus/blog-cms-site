import React from 'react'
import "./TopBar.css"

function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="fa-solid fa-rainbow topbar-icon"></i>
            
           
            </div>

            <div className="topCenter">
                <ul class="topList">
                    <li class="topListItem">Home</li>
                    <li class="topListItem">ABOUT</li>
                    <li class="topListItem">Contact Us</li>
                    <li class="topListItem">New Blogs</li>
                    <li class="topListItem">Trending</li>
                </ul>
        
            </div>
            <div className="topRight">
            <div className="topbar-item">Notifications</div>
            <div className="topbar-item">Login</div>
            </div>

            
        </div>
    )
}

export default TopBar
