import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BlogEditorToolbar } from '../components/BlogEditorToolbar';

export const BlogEditor: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // Save blog post logic
    console.log({ title, content });
  };

  return (
    <div className="space-y-6">
      <BlogEditorToolbar onSave={handleSave} />

      <div className="bg-white rounded-lg shadow p-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Başlık"
          className="w-full text-2xl font-bold mb-6 px-4 py-2 border-b focus:outline-none focus:border-blue-500"
        />

        <Editor
          apiKey='yh1wtyolp1mbkc8xj9m99oqup06cxs8j176whkjuhmj61i8h'
          value={content}
          onEditorChange={(content) => setContent(content)}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 
              'image', 'link', 'lists', 'media', 'searchreplace', 'table', 
              'visualblocks', 'wordcount', 'checklist', 'mediaembed', 
              'casechange', 'export', 'formatpainter', 'pageembed',
              'permanentpen', 'powerpaste', 'advtable', 'advcode',
              'editimage', 'tinycomments', 'tableofcontents'
            ],
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 16px }'
          }}
        />
      </div>
    </div>
  );
};