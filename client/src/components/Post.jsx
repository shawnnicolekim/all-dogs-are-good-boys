import React from 'react';

const Post = () => {
  const [posts, setPosts] = useState(null);

  /*
  useEffect(() => {
    axios.get('/posts')
      .then(res => {
        this.setPosts(res.data)
      })
      .catch(err => {
        console.error('Could not get posts for homepage: ', err)
      })
  })
  */

  return (
    <div>
      Hi
    </div>
  )
  };

export default Post;
