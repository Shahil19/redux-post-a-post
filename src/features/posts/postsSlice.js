import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postStatus: "idle",
    posts: [
        { id: 1, userId: 1, title: "Hello World", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" },
        { id: 2, userId: 2, title: "Good Bye World", body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla" },
    ]
}

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {}
})

export const getAllPosts = store => store.posts.posts
export default postsSlice.reducer