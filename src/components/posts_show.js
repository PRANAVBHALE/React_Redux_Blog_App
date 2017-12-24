import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost,deletePost} from '../actions'
import {Link} from 'react-router-dom'

class PostsShow extends Component{
  componentDidMount(){
  //  debugger
  if(!this.props.post){
    const {id} =   this.props.match.params
      this.props.fetchPost(id)
    }
  }

  onDeleteClick(){
      const {id} =   this.props.match.params
    this.props.deletePost(id,()=>{
      this.props.history.push('/')
    })
  }


  render(){
  ///  posts[this.props.match.params.id] //post we want to show
    const {post} = this.props
  //  debugger

    if(!post){
      return <div>Loading..</div>
    }

    return(
      <div>
      <Link to ="/">Back to Index</Link>
      <button
      className='btn btn-danger pull-xs-right'
      onClick={this.onDeleteClick.bind(this)}
      >
      DeletePost
      </button>

        <h3>{post.title}</h3>
        <h6>Categories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts},ownProps){
//  return {posts}
  //debugger
//  console.log(posts[ownProps.match.params.id]);
  return { post : posts[ownProps.match.params.id] };
}
export default connect (mapStateToProps,{fetchPost,deletePost})(PostsShow)
