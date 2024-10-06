import React from 'react'

const Plan = ({planType, pricePerMonth, list, arrow, button, summary, bg}) => {
  return (
    <div className='border py-3 px-5 rounded-lg shadow-md'>
      <aside className='flex justify-between text-2xl font-bold'>
      <p>{planType} </p>
      {planType === 'Pro' && <p className='text-purple-800 bg-purple-100 border flex justify-center items-center px-3  text-xs rounded-lg'>Recommended</p>}
      </aside>
      
      <p className='py-2'>{summary}</p>
      <h2 className='text-3xl border-b-2 pb-4 text-slate-700 mb-5 font-semibold py-2'>
        {pricePerMonth}
      </h2>
      {
        list.map((li)=>(
          <section className='flex pb-2 gap-4 items-center' key={li}>
            <span className='pi pi-check text-semibold text-sm'></span><p>{li}</p>
          </section>
        ))
      }
      <div className='pt-6 '>
        <button className={`flex w-full px-6 py-2 justify-center rounded-3xl items-center gap-3 text-white ${bg}`}><span>{button}</span><span className={`${arrow} text-xs`}></span></button>
      </div>

    </div>
  )
}

export default Plan