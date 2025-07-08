import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import ImageUpload from '../components/ImageUpload';

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('category', formData.category);
    if (image) data.append('image', image);
    
    await createPost(data);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImageUpload onImageSelect={setImage} />
      {/* Rest of your form */}
    </form>
  );
}