import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addPost } from '../JS/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addPost(post))
    }
}
const Addtask = (props) => {
    const [todo, setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id: Date.now(),
            todo,
            isDone: false,
        })
       setTodo("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>todo:</label>
                <input value={todo} onChange={e => setTodo(e.target.value)} />
            </div>
        </form>
    )
}

export default connect(null, mapDispatchToProps)(Addtask)
