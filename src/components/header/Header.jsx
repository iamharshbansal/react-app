import "./header.css"

export default function Header() {
    return (
        <div className="header">
             <div className="headerTitles">
                 <span className="headerTitlesSmall">Chattel-Technologies</span>
                 <span className="headerTitlesLarge">Blog</span>
             </div>
             <img className="headerImg" src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}
