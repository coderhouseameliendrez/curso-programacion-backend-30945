const { schema, normalize, denormalize } = require('normalizr') 
const util = require('util')

const blogspost = {
    id: 1,
    posts: [
      {
        id: "1",
        title: "My blog posts",
        description: "short description",
        content: "hello world",
        author: {
          id: "1",
          name: "john doe",
        },
        comments: [
          {
            id: 1,
            author: "robert",
            content: "Nice",
          },
          {
            id: 2,
            author: "jane",
            content: "i am agree",
          },
        ],
      },
      {
        id: "2",
        title: "My blog posts",
        description: "short description",
        content: "hello world",
        author: {
          id: "1",
          name: "john doe",
        },
        comments: [
          {
            id: 1,
            author: "robert",
            content: "Nice",
          },
          {
            id: 2,
            author: "jane",
            content: "i am agree",
          },
          {
            id: 3,
            author: "Agustin",
            content: "nuevo comentario",
          },
        ],
      },
    ],
};



const authorSchema = new schema.Entity("authors");
const commentSchema = new schema.Entity("comments");
const postSchema = new schema.Entity("posts", {
    author: authorSchema,
    comments: [commentSchema]
})
const blogSchema = new schema.Entity("blogs", {
    posts: [postSchema]
})


const normalizedBlog = normalize(blogspost, blogSchema)

console.log(util.inspect(normalizedBlog, false, 12, true));

console.log("-------------");


const denormalizedBlog = denormalize(normalizedBlog.result, blogSchema, normalizedBlog.entities)

console.log(util.inspect(denormalizedBlog, false, 12, true));