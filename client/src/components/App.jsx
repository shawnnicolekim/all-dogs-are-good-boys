import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('/posts')
      .then(data => {
        console.log('axios data:', data);
        this.setState({posts: data})
      })
      .catch(err => {
        console.error('Could not get posts for homepage: ', err)
      })
  }

  render() {
    return (
      <div>
        There's nothing here yet.
      </div>
    )
  }
}

export default App;