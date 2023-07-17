// setupTests.js (or jest.setup.js)
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Create a new instance of the MockAdapter
const mock = new MockAdapter(axios);

// Mock the response for your fetchComments API call
mock.onGet("https://jsonplaceholder.typicode.com/comments").reply(200, [
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
]);
