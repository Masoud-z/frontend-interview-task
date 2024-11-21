import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

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
  id: 1,
  author: "Masoud",
  content: "This is a test post.",
  image: "",
  liked: false,
};

describe("PostCard Component - Like/Unlike Button", () => {
  it("renders the Like button with color gray-200 correctly when 'liked' is false", () => {
    render(<PostCard {...mockPost} />);

    const likeButton = screen.getByRole("button", { name: /like/i });
    expect(likeButton).toBeInTheDocument();
    expect(likeButton).toHaveTextContent("Like");
    expect(likeButton).toHaveClass("bg-gray-200");
  });

  it("renders the Unlike button with color red-500 correctly when 'liked' is true", () => {
    render(<PostCard {...mockPost} liked={true} />);

    const unlikeButton = screen.getByRole("button", { name: /unlike/i });
    expect(unlikeButton).toBeInTheDocument();
    expect(unlikeButton).toHaveTextContent("Unlike");
    expect(unlikeButton).toHaveClass("bg-red-500");
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
});
