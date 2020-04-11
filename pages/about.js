import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";

export default class About extends Component {
  // state = {
  //   user: null,
  // };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/mojaray2k");
    const data = await res.json();
    return { user: data };
  }

  // componentDidMount() {
  //   fetch("https://api.github.com/users/mojaray2k")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         user: data,
  //       });
  //     });
  // }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        {/* {JSON.stringify(this.state.user)} */}
        {/* {JSON.stringify(this.props.user)} */}
        <p>{user.name}</p>
        <img src={user.avatar_url} alt={user.name} height="200px" />
      </Layout>
    );
  }
}
