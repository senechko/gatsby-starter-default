import React from "react";

const searchParams = new URLSearchParams(window.location.search);

export default class Form extends React.Component {
  state = {
    name: searchParams.get("name"),
  };

  handleSubmit = event => {
    if (event) {
      //event.preventDefault();
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="/deploy">
        <div>
          <label>Site name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            width="60"
          />
          <span>.westegg.io</span>
        </div>
        <input type="image" src="/icons/button_deploy-to-digitalocean.png" />
      </form>
    );
  }
}
