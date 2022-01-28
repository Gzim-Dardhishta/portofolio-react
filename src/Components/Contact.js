import React from 'react';
import './css/contact.css';


class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {},
        };
    }

        handleValidation() {
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            //Name
            if (!fields["name"]) {
                formIsValid = false;
                errors["name"] = "Cannot be empty";
            }

            if (typeof fields["name"] !== "undefined") {
                if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                    formIsValid = false;
                    errors["name"] = "Only letters";
                }
            }

            //Email
            if (!fields["email"]) {
                formIsValid = false;
                errors["email"] = "Cannot be empty";
            }

            if (typeof fields["email"] !== "undefined") {
                let lastAtPos = fields["email"].lastIndexOf("@");
                let lastDotPos = fields["email"].lastIndexOf(".");

                if (!(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )) {
                    formIsValid = false;
                    errors["email"] = "Email is not valid";
                }
            }

            //Message
            if (!fields["message"]) {
                formIsValid = false;
                errors["message"] = "Cannot be empty";
            }

            this.setState({ errors: errors });
            return formIsValid;
        }

        contactSubmit(e) {
            e.preventDefault();

            if (this.handleValidation()) {
                alert("Form submitted");
            } else {
                alert("Form has errors.");
            }
        }

        handleChange(field, e) {
            let fields = this.state.fields;
            fields[field] = e.target.value;
            this.setState({ fields });
        }


        render(){
            return (
                <div className='contact-body'>
                    <form onSubmit={this.contactSubmit.bind(this)} id='contact-form'>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder='Name' onChange={this.handleChange.bind(this, "name")}
                        value={this.state.fields["name"]} />
                        <span style={{ color: "red" }}>{this.state.errors["name"]}</span>

                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastname" placeholder='Surname' />

                        <label htmlFor="">Your E-mail</label>
                        <input type="email" name="email" placeholder='someome@example.domain' onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields["email"]} />
                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
    
                        <label htmlFor="">Message</label>
                        {/* <textarea type='message' name="message" cols="30" rows="10" placeholder='Type your message here....'></textarea> */}
                        <input type="message" name="message" id="message" placeholder='Type your message here' onChange={this.handleChange.bind(this, "message")}
                        value={this.state.fields["message"]}/>
                        <span style={{ color: "red" }}>{this.state.errors["message"]}</span>
    
                        <input type="submit" id='submit' value="Send Message" />
                    </form>
                </div>
            );
        }
}


// React.render(<Contact/>);
export default Contact;
