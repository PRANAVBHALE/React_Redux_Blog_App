import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'

class PostsNew extends Component{

  renderField(field){
  //  debugger
    return(
      <div className="form-group">
      <label>{field.label}</label>
        <input
        className="form-control"
        type='text'
        {...field.input}

        />
        {field.meta.error}
      </div>
    )
  }




  render(){
    return(
      <form>
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
})(PostsNew)
