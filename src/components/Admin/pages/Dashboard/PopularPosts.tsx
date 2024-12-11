import React from 'react';
import { Eye, MessageSquare, ThumbsUp } from 'lucide-react';

export const PopularPosts: React.FC = () => {
  const posts = [
    {
      title: 'Sınav Kaygısıyla Başa Çıkma Yöntemleri',
      views: '2.4K',
      comments: 45,
      likes: 156,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=120'
    },
    {
      title: 'Etkili İletişim Teknikleri',
      views: '1.8K',
      comments: 32,
      likes: 124,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120'
    },
    {
      title: 'Okul Öncesi Uyum Süreci',
      views: '1.5K',
      comments: 28,
      likes: 98,
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=120'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Popüler Blog Yazıları</h3>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="flex gap-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 mb-2">{post.title}</h4>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {post.views}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {post.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};