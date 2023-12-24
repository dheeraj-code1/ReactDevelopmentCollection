import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import { AuthLayout, Button, Input } from './components/index.js'
import Login from './pages/Login.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from "./pages/AddPost";
import Signup from './pages/SignUp'
import EditPost from './pages/EditPost.jsX'
import Post from "./pages/Post";
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "login",
            element: (
                // <AuthLayout authentication={false}>
                //     <Login />
                // </AuthLayout>
                // <Button/>
                // <Layout />
                <Login />
            ),
        },
        {
            path: "signup",
            element: (
                // <AuthLayout authentication={false}>
                //     <Signup />
                // </AuthLayout>
                    <Signup />
            ),
        },
        {
            path: "all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "add-post",
            element: (
                // <AuthLayout authentication>
                //     <h1>helloooo</h1>
                //     {" "}
                //     <AddPost />
                // </AuthLayout>
                    <AddPost />
            ),
        },
        {
            path: "edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)