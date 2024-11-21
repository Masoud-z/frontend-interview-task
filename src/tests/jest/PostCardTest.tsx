// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import PostCard from "../../components/Feed/PostCard";

// // Mock data for PostDto
// const mockPost = {
//   id: 1,
//   author: "John Doe",
//   content: "This is a test post.",
//   image: "",
//   liked: false,
//   bookMarked: false,
// };

// describe("PostCard Like Button", () => {
//   it("renders the Like button with color gray-200 when liked is false", () => {
//     render(<PostCard {...mockPost} />);

//     const likeButton = screen.getByRole("button", { name: /like/i });
//     expect(likeButton).toBeInTheDocument();
//     expect(likeButton).toHaveTextContent("Like");
//     expect(likeButton).toHaveClass("bg-gray-200");
//   });

//   it("renders the Unlike button with color red-500 when liked is true", () => {
//     render(<PostCard {...mockPost} liked={true} />);

//     const unlikeButton = screen.getByRole("button", { name: /unlike/i });
//     expect(unlikeButton).toBeInTheDocument();
//     expect(unlikeButton).toHaveTextContent("Unlike");
//     expect(unlikeButton).toHaveClass("bg-red-500");
//   });
 
// });
