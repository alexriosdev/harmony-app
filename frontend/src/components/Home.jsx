import React, { Component } from "react";




import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends Component {
  // Load up the chatrooms
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${this.props.currentUser.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.posts);
        this.setState({
          posts: data.posts,
        });
      });
  }


  handleLogout = (event) => {
    event.preventDefault();
    this.props.setUser(null);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        {/* <ChatroomList rooms={this.state.chatrooms} /> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
          }}
        >
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                name="userInput"
                type="text"
                placeholder="Type your message"
              />
            </div>
            <div className="control">
              <button className="button is-info">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.userState.currentUser };
};

// export default withRouter(Home);

const ShowTheLocationWithRouter = withRouter(Home);
export default connect(mapStateToProps)(ShowTheLocationWithRouter);
