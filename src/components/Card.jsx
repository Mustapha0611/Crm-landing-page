import React from 'react'

const Card = ({icon, heading, body}) => {
  return (
    <div className='bg-white border-2 rounded-xl p-4'>
        <aside className='bg-indigo-50 inline px-2 text-xl py-1 text-indigo-700 rounded-md'>
        <span className={icon}></span>
        </aside>
        <h3 className='text-2xl font-semibold mt-20'>{heading}</h3>
        <p className='pt-4'>{body}</p>
    </div> 
  )
}

export default Card