import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comment: []
        }
    }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('please input username')
        if (!comment.content) return alert('please input content')
        this.state.comment.push(comment)
        console.log(comment)
        this.setState({
            comments: this.state.comments
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comment}/>
            </div>
        )
    }
}

export default CommentApp