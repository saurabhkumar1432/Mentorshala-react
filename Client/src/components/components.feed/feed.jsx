import './feed.css'
import CreatePost from './createPost';
import FeedScroll from './feedScroll';
const Feed=()=>{
    return(
        <div id="feed-container">
            <CreatePost/>
            <FeedScroll/>
        </div>
    )
}
export default Feed