
import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { postHandler } from "../handlers/postHandler";
import { postService } from "../services/postService";

const AllPosts = () => {
    const [postsData, setPostsData] = useState([]);
    const data = postsData.filter((post) => {
        return post.posItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.postItem.location.toLowerCase().includes(searchQuery.toLowerCase())
      });

      useEffect(() => {
        getPosts()
      }, [])

  return (
    <div>
        {
            data.map((post) => {
                return (
                <Card border="light" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{Post.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{Post.description}</Card.Subtitle>
                </Card.Body>
            </Card>
            )
            } )
        }
    </div>
  )
}

export default AllPosts