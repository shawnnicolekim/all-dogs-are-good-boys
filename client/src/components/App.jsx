import React from 'react';
import axios from 'axios';
import PostList from './PostList.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('/posts')
      .then(res => {
        this.setState({posts: res.data})
      })
      .catch(err => {
        console.error('Could not get posts for homepage: ', err)
      })
  }

  render() {
    return (
      <div>
        <PostList posts={this.state.posts} />
      </div>
    )
  }
}

export default App;