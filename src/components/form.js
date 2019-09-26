import React from "react";

const searchParams =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search)
    : null;

let name = "Random-" + new Date().getTime();
let repoUrl = "";

if (searchParams) {
  repoUrl = searchParams.get("repoUrl");
  var lastSlash = name.lastIndexOf("/");
  if (lastSlash != -1) {
    name = repoUrl.substr(
      lastSlash + 1,
      name.lastIndexOf(".") - (lastSlash + 1)
    );
  }
}

export default class Form extends React.Component {
  state = {
    name: name,
    repoUrl: repoUrl,
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
      <>
        <div>Deploying: {this.state.name}</div>
        <form onSubmit={this.handleSubmit} action="/deploy">
          <input type="hidden" name="repo_url" value="{this.state.repoUrl}" />
          <div>
            <label>Site name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.appName}
              width="60"
            />
            <span>.westegg.io</span>
          </div>
          <input type="image" src="/button_deploy-to-digitalocean.png" />
        </form>
      </>
    );
  }
}
