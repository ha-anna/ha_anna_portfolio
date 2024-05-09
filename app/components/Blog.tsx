'use client';
import React from 'react';
import { nanoid } from 'nanoid';
import DeferredImage from './DeferredImage';

export default function Blog() {
  const [posts, setPosts] = React.useState([]);

  const blogQuery = `query Publication{
    publication(host: "haanna.hashnode.dev"){
        posts(first: 10) {
          edges {
            node {
              title
              brief
              coverImage {
              url }
              slug
            }
          }
        }
      }
    }
  `;

  React.useEffect(() => {
    const token = process.env.HASHNODE_TOKEN;
    async function gql(query: String) {
      const response = await fetch('https://gql.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setPosts(data.data.publication.posts.edges.slice(0, 2));
    }
    gql(blogQuery);
  }, [blogQuery]);

  interface Post {
    node: {
      slug: string;
      title: string;
      brief: string;
      coverImage: {
        url: string;
      };
    };
  }

  const postsHtml = posts.map((post: Post) => {
    return (
      <div
        className='card'
        key={nanoid()}>
        <DeferredImage
          imageUrl={post.node.coverImage.url}
          alt=''
        />
        <div className='card-body'>
          <h3 className='card-title'>{post.node.title}</h3>
          <p className='card-text'>{post.node.brief}</p>
          <div className='card-buttons'>
            <a
              href={`https://blog.haanna.com/${post.node.slug}`}
              target='_blank'
              className='btn read-btn'
              rel='noreferrer'>
              Read Now
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      aria-labelledby='blog'
      className='blog'>
      <h2 id='blog'>Blog</h2>
      <div className='cards'>{postsHtml}</div>
      <div className='blog-button'>
        <a
          href={`https://blog.haanna.com/`}
          target='_blank'
          className='btn read-btn'
          rel='noreferrer'>
          Got to blog.haanna.com
        </a>
      </div>
    </section>
  );
}
