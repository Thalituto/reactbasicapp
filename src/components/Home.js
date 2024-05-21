import React from 'react'

export default function Home() {

  const baseUrl = process.env.REACT_APP_DATA_URL;
  const baseUrlp = process.env.REACT_APP_BASE_URL;
  return (

    <div className='p-3'>
    <div className='card'>

      <div className='card-body'>

        <h3>Home component</h3>

          {baseUrl}

        {baseUrlp}
         

      </div>


    </div>
    </div>
  )
}
