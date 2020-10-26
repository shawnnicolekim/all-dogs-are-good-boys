import React from 'react';

const Post = () => (
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(res => {
        this.setState({posts: res.data})
      })
      .catch(err => {
        console.error('Could not get posts for homepage: ', err)
      })
  })
);

export default Post;
