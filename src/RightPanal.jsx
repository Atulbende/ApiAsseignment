import React from 'react'
import './App.css'
export default function RightPanal({postsData,commentsData}) {
  console.log('postsData:',postsData,commentsData)
  return (
    <div className='rightPanal'>
      {!!postsData && postsData?.map((posts)=>{
             return (
              <>    
                <h4>{posts?.title}</h4>
                <h4>{posts?.body}</h4>
                <i> Comment</i><hr/>
                {!!commentsData && commentsData.filter((c)=>{
                  console.log(c?.postId,posts?.id)
                  return c?.postId===posts?.id})?.map((c)=>{
                  return <p>{c?.body}</p>
                })}
             </>
             )
      })}

    </div>
  )
}
