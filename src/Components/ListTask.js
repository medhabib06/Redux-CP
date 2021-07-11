import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const ListTask = (props) => {
    return (
        <div>
            {props.posts.map((post) =>
                <p key={post.id} onClick={()=>{post.isDone=!post.isDone}} style={{textDecoration: post.isDone? "line-through" : null}} >{post.todo}</p>
            )}
        </div>
    )
}

export default connect(mapStateToProps)(ListTask)
