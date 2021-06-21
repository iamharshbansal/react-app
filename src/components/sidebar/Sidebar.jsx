import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItems">
            <h3 className="sidebarTitle">About Me</h3>
                <img className="sidebarImg" src="https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, iste. Explicabo praesentium ipsa impedit maxime. Harum, deleniti praesentium magnam
        </p>
            </div>
            <div className="sidebarItem">
                  <span className="sidebarTitle">Categories</span>
                   <ul className="sidebarList">
                       <li className="sidebarListItem">Life</li>
                       <li className="sidebarListItem">Music</li>
                       <li className="sidebarListItem">Style</li>
                       <li className="sidebarListItem">Sport</li>
                       <li className="sidebarListItem">Tech</li>
                       <li className="sidebarListItem">Cinema</li>
                   </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
