'use client';
import React from 'react';
import { nanoid } from 'nanoid';
import DeferredImage from './DeferredImage'

export default function Blog() {
  const [posts, setPosts] = React.useState([]);

  const blogQuery = `query {
    user(username: "ha-anna"){
      publication{
        posts(page: 0){
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
  `;

  React.useEffect(() => {
    async function gql(query: String) {
      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setPosts(data.data.user.publication.posts.slice(0, 2));
    }
    gql(blogQuery);
  }, [blogQuery]);

  interface Post {
    slug: string;
    title: string;
    brief: string;
    coverImage: string;
  }

  const postsHtml = posts.map((post: Post) => {
    return (
      <div
        className="card"
        key={nanoid()}>
        <DeferredImage
          imageUrl={post.coverImage} alt=""/>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.brief}</p>
          <div className="card-buttons">
            <a
              href={`https://blog.haanna.com/${post.slug}`}
              target="_blank"
              className="btn read-btn"
              rel="noreferrer">
              Read Now
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      aria-labelledby="blog"
      className="blog">
      <h2 id="blog">Blog</h2>
      <div className="cards">{postsHtml}</div>
      <div className="blog-button">
        <a
          href={`https://blog.haanna.com/`}
          target="_blank"
          className="btn read-btn"
          rel="noreferrer">
          Got to blog.haanna.com
        </a>
      </div>
    </section>
  );
}
