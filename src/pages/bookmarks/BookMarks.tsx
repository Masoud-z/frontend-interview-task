import PostCard from "../../components/Feed/PostCard";
import useStore from "../../store/useStore";

export const BookMarks: React.FC = () => {
  const posts = useStore((state) => state.posts).filter(
    (post) => post.bookMarked
  );

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
