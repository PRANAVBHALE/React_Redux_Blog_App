import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import Webcam from "react-webcam";



class PostsIndex extends Component{

  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();

    console.log(imageSrc);
    
  };

  componentDidMount(){
    this.props.fetchPosts()
  }

  renderPosts(){
  //  debugger
    return   _.map(this.props.posts,post=>{
      return (
        <li className='list-group-item' key={post.id}>

        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
        </li>
      )
    })
  }

  render(){
  //  console.log(this.props.posts);
  const videoConstraints = {
    width: 1280,
    height: 1280,
    facingMode: "user"
  };
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
              Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <h4>hello</h4>

           <Webcam
          audio={false}
          height={500}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
      </div>
    )
  }
}


function mapStateToProps(state){
  //debugger
  return { posts:state.posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)
