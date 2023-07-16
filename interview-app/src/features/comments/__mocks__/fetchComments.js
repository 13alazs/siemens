// __mocks__/fetchComments.js
const fetchComments = {
  data: [
    {
      id: 1,
      postId: 1,
      name: "John Doe",
      email: "john@example.com",
      body: "This is a test comment.",
    },
    {
      id: 2,
      postId: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      body: "Another test comment.",
    },
  ],
};

export default fetchComments;
