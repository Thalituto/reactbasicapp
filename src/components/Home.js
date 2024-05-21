import React from 'react'

export default function Home() {

   const baseUrl = process.env.REACT_APP_DATAURL;
  return (

    <div className='p-3'>
    <div className='card'>

      <div className='card-body'>

        <h3>Home component</h3>

          {baseUrl}


         

      </div>


    </div>
    </div>
  )
}
