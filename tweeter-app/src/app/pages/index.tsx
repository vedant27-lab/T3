import { trpc } from '../utils/trpc';
import Tweet from '../components/Tweet';
import NewTweetForm from '../components/NewTweetForm';

const Home = () => {
  const { data, isLoading } = trpc.useQuery(['getAllTweets']);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <NewTweetForm />
      {data?.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Home;
