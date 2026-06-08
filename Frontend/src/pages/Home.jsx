import axios from "axios";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/getPost");

        setPosts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Recent Posts</h2>

          <p className="text-gray-500 mt-2">
            Discover what people are sharing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              caption={post.caption}
              image={`http://localhost:3000/public/${post.image
                .split("\\")
                .pop()}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
