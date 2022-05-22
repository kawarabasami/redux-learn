import {useSelector} from 'react-redux';

function Count(){
    const count = useSelector((state) => state.countReducer.count);
    const posts = useSelector((state) => state.postsReducer.posts);
    return (
        <>
        <div>
        Countコンポーネント:{count}
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
        </>
    )
}

export default Count;