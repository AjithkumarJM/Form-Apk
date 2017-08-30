import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    /* onChange={field.input.onChange}  onFocus={field.input.onFocus} onBlur={field.input.onBlur} */
                    {...field.input}
                />
            </div>
        );
    }


    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />

                <Field
                    label="categories"
                    name="categories"
                    component={this.renderField}
                />

                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}


function validate(values) {
        // console.log(values) -> {title : "asdf", categories:"asdf",Post Content}
        const errors ={};

        // validate the input from 'values
        // if (values.title.length < 3) {
        //     errors.title="atleast it have 3 characters";
        //     }
        
        if (!values.title) {
            errors.title="enter a title";
        }

        if (!values.categories) {
            errors.categories="enter some categories";
        }

        if (!values.content) {
            errors.content="enter some content please";
        }
        // if no error i.e if error is empty the form is ready to submit
        // if errors have *any* redux form assumes form is invalid
        return errors ;
}
export default reduxForm({
    //validate: validate;
    validate,
    form: 'PostsNewForm'
})(PostsNew);