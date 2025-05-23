import React from 'react'

function Video() {
  return (
    <div className='w-full h-screen fixed'>
      <div className='w-full fixed top-0 z-4 h-full bg-black/75 backdrop-blur-sm'></div>
      <video className='w-full h-full fixed top-0 object-cover' autoPlay loop muted >
        <source src={'./bgvideoone.mp4'} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
