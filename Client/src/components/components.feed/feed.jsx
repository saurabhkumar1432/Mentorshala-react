import './feed.css'
import CreatePost from './createPost';
import FeedScroll from './feedScroll';
const Feed=(props)=>{
    const userData=props.userData
    return(
        <div id="feed-container">
            <CreatePost userData={userData}/>
            <FeedScroll/>
        </div>
    )
}
export default Feed