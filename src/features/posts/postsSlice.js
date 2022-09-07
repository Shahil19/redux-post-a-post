import { createSlice } from "@reduxjs/toolkit";

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    postStatus: "idle",
    posts: [
        {
            id: 1,
            userId: 1,
            title: "Hello World",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            reaction: {
                love: 0,
                dislike: 0,
                angry: 0,
                coffee: 0
            }
        },
        {
            id: 2,
            userId: 2,
            title: "Good Bye World",
            body: "est rerum tempore vitae nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            reaction: {
                love: 0,
                dislike: 0,
                angry: 0,
                coffee: 0
            }
        },
    ]
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state, action) => {
            console.log(action.payload)
            state.posts.push(action.payload)
        }
    }
})

export const getAllPosts = store => store.posts.posts
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer