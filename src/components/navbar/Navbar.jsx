import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="top">
            <div className="NavLeft">
                <img className="logo" src="Images/CHATTEL_icon.png" alt="Company's Logo" />
                <h2 className="heading">Chattel-Technology</h2>

            </div>
            <div className="NavCenter">
                <ul className="NavbarTab">
                    <li className="NavbarTabItem">Home</li>
                    <li className="NavbarTabItem">About</li>
                    <li className="NavbarTabItem">Blogs</li>
                    <li className="NavbarTabItem">Create</li>
                    <li className="NavbarTabItem">Contact</li>
                </ul>
            </div>
            <div className="NavRight">
                Search Here
                <span className="NavSearchIcon"> <i className="fas fa-search" ></i></span>
               
                {/* <img className="NavSearchIcon" src='src\Images\search.png' alt="Search"></img> */}
                            
        
            </div>
        </div>
    )
}
