import React from 'react'

const jobsPage = ({results}) => {
  return (
    <>
     <div>
      <h3 className='text-lg font-semibold mb-2'>{results.length} Jobs </h3>
    </div>
      {results}
    </>
   
  )
}

export default jobsPage;