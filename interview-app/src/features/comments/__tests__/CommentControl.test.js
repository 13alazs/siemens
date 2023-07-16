import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CommentControl from "../CommentControl/CommentControl";
import { useSelector, useDispatch } from "react-redux";

// Mock the useSelector hook
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("CommentControl", () => {
  beforeEach(() => {
    // Mock
    useSelector.mockReturnValue([]);
  });

  it("should render CommentControl component correctly", () => {
    render(<CommentControl showComments={false} showGraph={false} />);

    // Assert
    expect(screen.getByLabelText("Filter by postId")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Apply/i })).toBeInTheDocument();
    expect(screen.getByText("Count: 0")).toBeInTheDocument(); // Use getByText here
    expect(
      screen.getByRole("button", { name: /Show comments/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Show graph/i })
    ).toBeInTheDocument();
  });

  it("should display the comment count correctly", () => {
    // Mock
    useSelector.mockReturnValue([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ]);

    render(<CommentControl showComments={false} showGraph={false} />);

    // Assert
    expect(screen.getByText("Count: 5")).toBeInTheDocument();
  });

  it("should have hide comments and show graph buttons", () => {
    render(<CommentControl showComments={true} showGraph={false} />);

    // Assert
    expect(
      screen.getByRole("button", { name: /Hide comments/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Show graph/i })
    ).toBeInTheDocument();
  });

  it("should have hide comments and hide graph buttons", () => {
    render(<CommentControl showComments={true} showGraph={true} />);

    // Assert
    expect(
      screen.getByRole("button", { name: /Hide comments/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Hide graph/i })
    ).toBeInTheDocument();
  });

  it("should have show comments and hide graph buttons", () => {
    render(<CommentControl showComments={false} showGraph={true} />);

    // Assert
    expect(
      screen.getByRole("button", { name: /Show comments/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Hide graph/i })
    ).toBeInTheDocument();
  });
});
