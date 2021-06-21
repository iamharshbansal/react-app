import "./singlePost.css";


export default function SinglePost() {
    return (
        <div className= "singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/296115/pexels-photo-296115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum, dolor 
                    <div className="singlePostEdit">
                    <i className="sinlePostIcon far fa-edit"></i>
                    <i className="sinlePostIcon far fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Harsh</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae dolores veniam aut magnam maiores inventore, ipsam doloremque autem earum cum nam eligendi ex quam animi asperiores ad obcaecati esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloremque fugit eius consequatur ea, dolorem veniam aliquid nemo amet hic, inventore impedit officiis expedita, voluptatem quae praesentium quas placeat? Ipsum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit pariatur, quos, esse impedit et rem eaque itaque a recusandae minima quis asperiores labore. Dolores corporis ad explicabo deleniti ipsa cum.</p>
            </div>         

        </div>
    )
}
