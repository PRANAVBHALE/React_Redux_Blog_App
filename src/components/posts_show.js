import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'

class PostsShow extends Component{
  componentDidMount(){
    debugger
  const {id} =   this.props.match.params
    this.props.fetchPost(id)
  }


  render(){
  ///  posts[this.props.match.params.id] //post we want to show
    const {post} = this.props
    debugger

    return(
      <div>
        <h3>{post.title}</h3>
        <h6>Categories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts},ownProps){
//  return {posts}
  debugger
  console.log(posts[ownProps.match.params.id]);
  return {post:posts[ownProps.match.params.id]};
}
export default connect (mapStateToProps,{fetchPost})(PostsShow)
