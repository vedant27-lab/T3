import { useState } from 'react';
import { trpc } from '../utils/trpc';

const NewTweetForm = () => {
  const [content, setContent] = useState('');
  const createTweet = trpc.useMutation('createTweet');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTweet.mutateAsync({ content, authorId: 1 }); // Replace with actual user ID
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Tweet
      </button>
    </form>
  );
};

export default NewTweetForm;
