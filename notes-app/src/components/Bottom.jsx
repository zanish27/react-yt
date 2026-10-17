import React from 'react'
import { Star , Pencil } from 'lucide-react'

const Bottom = (props) => {
  return (
    <div className={`p-10 border-t-2 ${props.dark ? 'border-gray-700' : 'border-gray-800'}`}>
      <h1 className='text-4xl font-bold'>
  {props.page === 'fav' ? 'Favorite Notes' : 'Recent Notes'}
</h1>

{props.page === 'fav' && props.favCount === 0 && (
  <p className={`text-center mt-10 text-lg ${props.dark ? 'text-gray-400' : 'text-gray-500'}`}>
    No favorite notes added yet. Tap the <Star size={16} className='inline' /> on a note.
  </p>
)}
      
      <div className='flex flex-wrap gap-5 mt-5'>
        {props.Task.map((elem, idx) => {

          if (props.page === 'fav' && !elem.fav) return null

          return (
            <div
  key={idx}
  className={`h-60 w-44 pb-4 px-4 pt-9 rounded-xl flex flex-col justify-between ${
    props.dark
      ? 'bg-gray-800 text-white'
      : "text-black bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV5tVmg0bHJmbRz7WJS4boFuZMIEPRZRbMq3qh6JuTg&s=10')]"
  }`}
>
              <div className='overflow-y-auto flex-1 min-h-0'>
                <h3 className='leading-tight text-xl font-bold wrap-break-word'>{elem.title}</h3>
                <p className={`mt-4 leading-tight font-medium wrap-break-word ${props.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {elem.detail}
                </p>
              </div>

              <p className={`text-xs mt-2 ${props.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {props.timeAgo(elem.time)}
              </p>
              

              <div className='flex gap-2 mt-2'>

                <button
                  onClick={() => {
                    props.deleteNote(idx)
                  }}
                  className='flex-1 cursor-pointer active:scale-95 bg-teal-900 py-1 text-xs text-white rounded font-bold'
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    props.favNote(idx)
                  }}
                  className='cursor-pointer active:scale-95 bg-teal-900 px-2 rounded text-white'
                >
                  <Star size={16} fill={elem.fav ? 'yellow' : 'none'} />
                </button>

              <button
              onClick={() => {
              props.editNote(idx)
              }}
            className='cursor-pointer active:scale-95 bg-teal-900 px-2 rounded text-white'>
            <Pencil size={16} />
            </button>

            </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Bottom