import { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';

export default function CategorySelect({ value, onChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded mb-4"
      required
    >
      <option value="">Select a category</option>
      {categories.map((category) => (
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}