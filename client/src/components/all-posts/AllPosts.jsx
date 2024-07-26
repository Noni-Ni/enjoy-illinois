import PostCard from "../post-card/PostCard";

export default function AllPosts(){
    return(
        <div>
            <h2>Browse Activities & Attractions in Illinois</h2>
            <p>Discover amusement parks, museums, parks & forests, outdoor activities, history, dining, unmissable events and so much more in The Middle of Everything!</p>
            <div className="container">
                <PostCard/>
                <PostCard/>
                <PostCard/>

            </div>
        </div>
    )
}