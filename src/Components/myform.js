// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import { TextField } from "@material-ui/core";
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xpzoknpe"
        method="POST"
      >
        <div className=" container formspace">
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            className="success2 col-12 espacio3"
            type="text"
            required
            name="Email"
          />
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            className="col-12  success2 espacio3"
            type="text"
            required
            name="Name"
          />
          <TextField
            required
            id="outlined-textarea"
            label="Message"
            multiline
            variant="filled"
            className="col-12 success2 espacio3"
            type="text"
            name="Message"
          />
        </div>
        {status === "SUCCESS" ? (
          <p className="container text-center h5 pt-4">Thanks!</p>
        ) : (
          <div className="container text-center spaces botoon">
            <button className="btn btn-info button">Submit</button>
          </div>
        )}
        {status === "ERROR" && <p className="container text-center h5">Ooops! There was an error.</p>}
      </form>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
