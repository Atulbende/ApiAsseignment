import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import LeftPanal from './LeftPanal'
import RightPanal from './RightPanal'
function App() {
  const [users,setUsers]=useState([])
  const [posts,setposts]=useState([])
  const [comments,setComments]=useState([])
  const [loader,setLoader]=useState(false);
  const refFun= async(_id)=>{
    setLoader(true)
    const Post=(await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${_id}`));
    const userPosts=await Post.json();
    const  PromiseComments=  userPosts.map(_post=>{
      return fetch(`https://jsonplaceholder.typicode.com/posts/${_post.id}/comments`).then((res)=>
        res.json()
      );
    })
    const userComment= await Promise.all(PromiseComments);
    console.log('userComment::',userComment)
    setposts(userPosts)
    setComments(userComment.flat())
    setLoader(false)
}
  const getAllUsers= async()=>{
    try {      
      const res_users=await(fetch('https://jsonplaceholder.typicode.com/users'));
      const allUser=await res_users.json();
      console.log("allUser:",allUser)
      setUsers(allUser);
      // setComments(allcomments);
    } catch (error) {
      console.log("error:",error)
    }
  }
  useEffect(() => {
    getAllUsers();
  }, [])
  return (
    <div className="App">
    <LeftPanal usersData={users} refFun={refFun}/>
    {/* <div className='loader'><div className='dots-flow'></div></div> */}
    {!!loader?
      <div className='loader'>
        <div className='dots-flow'/>
      </div>
      :<RightPanal postsData={posts} commentsData={comments}/>
    }
    </div>
  );
}


export default App;
