import React from "react"

function Error({mensaje}) {
  return (
    <div>
        <p className='bg-red-600 text-center text-white p-2 my-2 font-bold uppercase rounded-md'>{mensaje}</p>
        </div>
  )
}
export default Error