const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    mode : "light",
    user:null,
    token:null,
    posts:[]
}

export const authslice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mode=state.mode==="light" ? "dark" : "light" 
        },
        setLogin:(state,action)=>{
            state.user=action.payload.user
            state.token=action.payload.token
        },
        setLogout:(state)=>{
            state.user=null            
            state.token=null
        },
        setFriends:(state,action)=>{
            if(state.user !== null){
                state.user.friends=action.payload.friends
            }else{
                console.error('user friends not exist :(')
            }
                
        },
        setPosts:(state,action)=>{
            state.posts=action.payload.posts
        },
        setPost:(state,action)=>{
            state.posts=state.posts.map(post=>{
                if(post._id === action.payload.post._id) return action.payload.post
                return post
            })
        }
    }
})

export const {setMode,setLogin,setLogout,setFriends,setPosts,setPost} =authslice.actions
export default authslice.reducer