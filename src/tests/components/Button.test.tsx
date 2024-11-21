import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import Button from "../../components/core/Button/Button";

describe("PostCard Component - Like/Unlike Button", () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });
  it("calls toggle function when clicked", () => {
    render(<Button title="test" onClick={mockOnClick} />);

    const button = screen.getByRole("button", { name: /test/i });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
