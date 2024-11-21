import React from "react";
import { PostDto } from "../../core/dto/Post";
import useStore from "../../store/useStore";
import NoImage from "../core/NoImage/NoImage";
import ReportModal from "./ReportModal";

interface PostCardProps extends PostDto {}

const PostCard: React.FC<PostCardProps> = ({
  id,
  author,
  content,
  image,
  liked,
  bookMarked,
}) => {
  const toggleLike = useStore((state) => state.toggleLike);
  const toggleBookmark = useStore((state) => state.toggleBookmark);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{author}</h2>
      <p className="my-2">{content}</p>
      {image ? (
        <img
          src={image}
          alt="Post"
          className="w-full h-96 object-cover mb-2 rounded"
        />
      ) : (
        <NoImage className="w-full h-96 mb-2 rounded" />
      )}
      <div className="flex justify-start items-center gap-2">
        <button
          onClick={() => toggleLike(id)}
          className={`px-4 transition delay-100 ease-linear py-2 w-20 rounded border border-solid border-transparent ${
            liked ? "bg-red-500 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <button
          onClick={() => toggleBookmark(id)}
          className={`px-4 transition delay-100 ease-linear py-2 w-32 rounded border border-solid border-transparent ${
            bookMarked
              ? "bg-lime-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {bookMarked ? "Unbookmark" : "Bookmark"}
        </button>
        <ReportModal postId={id} />
      </div>
    </div>
  );
};

export default PostCard;
