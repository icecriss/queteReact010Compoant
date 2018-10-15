import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordValid: false,
      firstname: "",
      lastname: "",
      focuss: ""
    };
  }

  changeEmail(e) {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(e.target.value)) {
      this.setState({ focuss: "test" });
    } else {
      this.setState({ focuss: "" });
    }
    if (e.target.value.length !== 0) {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ email: "" });
    }
  }

  changePassword(e) {
    if (e.target.value.length !== 0) {
      this.setState({ password: e.target.value });
      if (e.target.value !== document.getElementById("password2")) {
        this.setState({
          passwordValid: false
        });
      }
    } else {
      this.setState({
        password: "",
        passwordValid: false
      });
    }
  }

  checkPassword(e) {
    if (e.target.value === this.state.password && this.state.password !== "") {
      this.setState({ passwordValid: true });
    } else {
      this.setState({ passwordValid: false });
    }
  }

  changeFirstname(e) {
    if (e.target.value !== "") {
      this.setState({ firstname: e.target.value });
    } else {
      this.setState({ firstname: "" });
    }
  }

  changeLastname(e) {
    if (e.target.value !== "") {
      this.setState({ lastname: e.target.value });
    } else {
      this.setState({ lastname: "" });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <h1>
          {JSON.stringify(this.state)
            .split(",")
            .join(", ")}
        </h1>

        <form>
          <label htmlFor="email">Enter your email</label>
          <input
            className={this.state.focuss}
            onChange={e => this.changeEmail(e)}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password1">Enter your password</label>
          <input
            onChange={e => this.changePassword(e)}
            type="password"
            id="password1"
            name="password1"
            placeholder="Enter your password"
            required
          />

          <label htmlFor="password2">Enter your password again</label>
          <input
            onChange={e => this.checkPassword(e)}
            type="password"
            id="password2"
            name="password2"
            placeholder="Confirm your password"
            required
          />

          <label htmlFor="firstname">Enter your firstname</label>
          <input
            onChange={e => this.changeFirstname(e)}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your firstname"
            required
          />

          <label htmlFor="lastname">Enter your lastname</label>
          <input
            onChange={e => this.changeLastname(e)}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your lastname"
            required
          />
          <input
            onClick={e => this.handleSubmit(e)}
            type="submit"
            value="Soumettre"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
