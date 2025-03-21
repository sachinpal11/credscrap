import React from 'react'

function Video() {
  return (
    <div className='w-full bg-green-600 h-screen fixed'>
      <video autoPlay loop muted >
        <source src={'./bgvideo.mp4'} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
