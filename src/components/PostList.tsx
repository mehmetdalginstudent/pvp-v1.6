import React from 'react';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h4 className="font-semibold text-lg mb-2">{post.title}</h4>
            <p className="text-gray-600 mb-2">{post.content}</p>
            <time className="text-sm text-gray-500 block">{post.date}</time>
          </div>
        </article>
      ))}
    </div>
  );
};