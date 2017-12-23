import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createPost} from '../actions'

class PostsNew extends Component{

  renderField(field){
  //  debugger

  const {meta:{touched,error}}=field
  const className=`form-group ${touched && error ? 'has-danger' : ''}`


    return(
      <div className={className}>
      <label>{field.label}</label>
        <input
        className="form-control"
        type='text'
        {...field.input}

        />
        <div className="text-help">
        {touched ? error : ''}

        </div>
      </div>
    )
  }


onSubmit(values){
//  console.log(values);

this.props.createPost(values,()=>{
  this.props.history.push('/')
})
}

  render(){

    const {handleSubmit} = this.props


    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
        label="Title"
        name="title"
        component={this.renderField}
        />
        <Field
        label="Categories"
        name="categories"
        component={this.renderField}
        />
        <Field
        label="Post Content"
        name="content"
        component={this.renderField}
        />

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger" >Cancel </Link>

      </form>
    )
  }
}

function validate(values){
  const error = {}

  if (!values.title) {
    error.title="Enter some title"
  }
  if (!values.categories) {
    error.categories="Enter some categories"
  }
  if (!values.content) {
    error.content="Enter some content"
  }


  //if obj error is empty then form is fine to submit
  //if error have any propery , redux form is invalid
  return error
}

export default reduxForm({
  validate,
  form:'PostsNewForm'    //Unique String to Identify Multiple forrms on same page
})(
  connect(null,{createPost})(PostsNew)
)
