import useStore from "../../store/useStore";
import PostCard from "../../components/Feed/PostCard";

export const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Posts ({posts.length})</h1>{" "}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
          bookMarked={post.bookMarked}
        />
      ))}
    </div>
  );
};
