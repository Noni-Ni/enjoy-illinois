
import { useGetAllPosts } from "../../hooks/usePosts";

import PostCard from "../post-card/PostCard";

export default function AllPosts(){
    const [posts ] = useGetAllPosts();
    console.log(posts)
    return(
        <div>
            <h2>Browse Activities & Attractions in Illinois</h2>
            <p>Discover amusement parks, museums, parks & forests, outdoor activities, history, dining, unmissable events and so much more in The Middle of Everything!</p>
            <div className="container">
            {posts.length > 0 
                ? posts.map(post =>  <PostCard key={post._id} {...post} />) 
                : <h3 className="no-articles">No posts yet</h3>}
                

            </div>
        </div>
    )
}