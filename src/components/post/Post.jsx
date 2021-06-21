import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/193777/pexels-photo-193777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

            <div className="postInfo">
                <div className="postCategory">
                    <span className="postCat">Technology</span>
                    <span className="postCat">Science</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor ametr</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero minus porro nulla perspiciatis iusto iste optio numquam molestiae quis maxime fugiat quia suscipit officiis molestias, labore debitis a, expedita fugit.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe iste, tempore eligendi officia neque atque impedit, exercitationem temporibus laborum distinctio voluptatum quaerat eveniet maiores quia, incidunt dolorem architecto voluptas! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus a facilis quo tenetur? Enim nobis, dolore temporibus impedit quibusdam odio natus quasi, repudiandae consectetur ea tempore fugiat nulla sunt aut!
            </p>
        </div>
    )
}
