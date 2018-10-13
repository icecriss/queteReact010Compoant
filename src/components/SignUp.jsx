import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "address@email.co.uk",
      focuss: ""
    };
  }

  changeEmail(e) {
    // let h1Value = e.target.value.replace(/\*/i, "");
    // e.target.value = h1Value;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(e.target.value)) {
      this.setState({ focuss: "test" });
    } else {
      this.setState({ focuss: "" });
    }
    if (e.target.value.length !== 0) {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ email: "address@email.co.uk" });
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="email">
          <h1>{this.state.email}</h1>
        </label>
        <input
          className={this.state.focuss}
          onChange={e => this.changeEmail(e)}
          id="email"
          name="email"
          type="text"
        />
      </div>
    );
  }
}

export default SignUp;
