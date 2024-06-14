const Tweet = ({ tweet }) => {
    return (
      <div className="border p-4 mb-4 rounded shadow">
        <h3 className="font-bold">{tweet.author.name}</h3>
        <p>{tweet.content}</p>
      </div>
    );
  };
  
  export default Tweet;
  