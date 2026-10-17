import React from 'react'

const Top = (props) => {
    const border = props.dark ? 'border-gray-500 placeholder-gray-400' : 'border-gray-800'
return (
    <div className='flex flex-items justify-between'>
    <form onSubmit={(elem)=>{
        
        props.SubmitHandler(elem)
        }} 
        className=' flex flex-col items-start p-5 w-full lg:max-w-4xl gap-4 sm:p-10 '>

        <h1 className='text-4xl mb-2 font-bold'>
            {props.editIdx !== null ? 'Edit Note' : 'Add Notes'}
        </h1>

        <input className='px-5 py-2 w-full  border-2 rounded capitalize font-medium'
        type='text'
        placeholder='Enter notes Heading'
        value={props.title}
        onChange={(e)=>{
            props.setTitle(e.target.value)
        }}
        />

        <textarea className='px-5 py-2 w-full h-50 border-2 rounded capitalize font-medium  resize-none'
        placeholder='Write details'
        value={props.detail}
        onChange={(e)=>{
        props.setDetail(e.target.value)
        }}      
                />

        <div className='flex gap-3 w-full justify-center'>
  <button
    className={`w-50 px-5 py-2 rounded font-medium active:scale-95 text-white ${props.dark ? 'bg-gray-700' : 'bg-teal-900 self-center'}`}
  >
    {props.editIdx !== null ? 'Update Note' : 'Add Note'}
  </button>

  {props.editIdx !== null && (
    <button
      type='button'
      onClick={() => {
        props.cancelEdit()
      }}
      className='w-50 px-5 py-2 rounded bg-red-500 text-white font-medium active:scale-95 self-center'
    >
      Cancel
    </button>
  )}
</div>
        
        </form>
       <div className='hidden lg:block shrink-0'>
  <img
    className='w-80 xl:w-96 h-auto object-contain mt-5'
    src='notes.png'
  />
</div>

        </div>

)
}

export default Top
