import { render, screen, renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { create } from "zustand";
import useStore, { StoreState } from "../../store/useStore";
import PostCard from "../../components/Feed/PostCard";
import { PostDto } from "../../core/dto/Post";

const mockPost: PostDto = {
  id: 1,
  author: "Masoud",
  content: "This is a test post.",
  image: "",
  liked: false,
  bookMarked: false,
};

const mockPostWithoutBookMarked: PostDto = {
  id: 2,
  author: "Masoud",
  content: "This is a test post.",
  image: "",
  liked: false,
};

vi.mock("../../store/useStore", () => {
  return {
    default: create<StoreState>((set) => ({
      posts: [],
      toggleLike: vi.fn((postId: number) => {
        set((state: StoreState) => ({
          posts: state.posts.map((post: PostDto) =>
            post.id === postId ? { ...post, liked: !post.liked } : post
          ),
        }));
      }),
      toggleBookmark: vi.fn((id: number) =>
        set((state) => ({
          posts: state.posts.map((post) => {
            if (post.id === id) {
              return { ...post, bookMarked: !post.bookMarked };
            }
            return post;
          }),
        }))
      ),
      toasts: [],
      addToast: vi.fn(),
      removeToast: vi.fn(),
    })),
  };
});

describe("PostCard Component - Like/Unlike Button", () => {
  const mockToggle = vi.fn();
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();

    const store = useStore.getState();
    store.posts = [mockPost, mockPostWithoutBookMarked];
    mockToggle.mockClear();
  });

  it("renders the Like button with color gray-200 correctly when 'liked' is false", () => {
    render(<PostCard {...mockPost} />);

    const likeButton = screen.getByRole("button", { name: /Like/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("Like");
    expect(likeButton).toHaveClass("bg-gray-200");
  });

  it("renders the Unlike button with color red-500 correctly when 'liked' is true", () => {
    render(<PostCard {...mockPost} liked={true} />);

    const unlikeButton = screen.getByRole("button", { name: /Unlike/i });
    expect(unlikeButton).toBeInTheDocument();
    expect(unlikeButton).toHaveTextContent("Unlike");
    expect(unlikeButton).toHaveClass("bg-red-500");
  });

  it("should toggle Like status on click", () => {
    const { result } = renderHook(() => useStore());
    const toggleLike = result.current.toggleLike;

    act(() => {
      toggleLike(1);
    });

    expect(toggleLike).toHaveBeenCalledTimes(1);
    expect(toggleLike).toHaveBeenCalledWith(1);

    const updatedPosts = result.current.posts;
    expect(updatedPosts.find((post) => post.id === 1)?.liked).toBe(true);
  });
});

describe("PostCard Component - Bookmark/Unbookmark Button", () => {
  it("renders the Bookmark button with color gray-200 correctly when 'bookMarked' is false", () => {
    render(<PostCard {...mockPost} />);

    const likeButton = screen.getByRole("button", { name: /Bookmark/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("Bookmark");
    expect(likeButton).toHaveClass("bg-gray-200");
  });

  it("renders the Bookmark button with color gray-200 correctly when 'bookMarked' is not defined", () => {
    render(<PostCard {...mockPostWithoutBookMarked} />);

    const likeButton = screen.getByRole("button", { name: /Bookmark/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("Bookmark");
    expect(likeButton).toHaveClass("bg-gray-200");
  });

  it("renders the Unbookmark button with color lime-500 correctly when 'bookMarked' is true", () => {
    render(<PostCard {...mockPost} bookMarked={true} />);

    const unlikeButton = screen.getByRole("button", { name: /Unbookmark/i });
    expect(unlikeButton).toBeInTheDocument();
    expect(unlikeButton).toHaveTextContent("Unbookmark");
    expect(unlikeButton).toHaveClass("bg-lime-500");
  });

  it("should toggle Bookmark status on click", () => {
    const { result } = renderHook(() => useStore());
    const toggleBookmark = result.current.toggleBookmark;

    act(() => {
      toggleBookmark(1);
    });

    expect(toggleBookmark).toHaveBeenCalledTimes(1);
    expect(toggleBookmark).toHaveBeenCalledWith(1);

    const updatedPosts = result.current.posts;
    expect(updatedPosts.find((post) => post.id === 1)?.bookMarked).toBe(true);
  });
});
