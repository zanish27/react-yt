import React from 'react'
import { NotebookText, Star, Moon, Sun } from 'lucide-react'

const Navbar = (props) => {
  const active = 'bg-white/20 rounded px-2 py-1'
  const normal = 'px-2 py-1'

  return (
    <div className={`p-5 lg:w-60 lg:min-h-screen flex flex-col text-white ${props.dark ? 'bg-gray-900' : 'bg-teal-900'}`}>
      <h1 className='text-3xl font-bold mb-4 lg:mb-6'>Notes App</h1>

      <nav className='flex flex-wrap lg:flex-col lg:flex-1 gap-3 lg:gap-5 text-base sm:text-xl font-bold'>

        <h3
          onClick={() => {
            props.setPage('notes')
          }}
          className={`flex items-center justify-between gap-2 cursor-pointer ${props.page === 'notes' ? active : normal}`}
        >
          <span className='flex items-center gap-2'>
           <NotebookText strokeWidth={2.25} /> Notes
          </span>
           <span className='text-sm bg-white text-teal-900 rounded-full px-2'>{props.totalCount}</span>
        </h3>

        <h3
          onClick={() => {
            props.setPage('fav')
          }}
          className={`flex items-center justify-between gap-2 cursor-pointer ${props.page === 'fav' ? active : normal}`}
        >
          <span className='flex items-center gap-2'>
          <Star strokeWidth={2.25} /> Favorites
          </span>
          <span className='text-sm bg-white text-teal-900 rounded-full px-2'>{props.favCount}</span>
        </h3>

        <h3
          onClick={() => {
            props.toggleDark()
          }}
          className='flex items-center gap-2 cursor-pointer lg:mt-auto px-2 py-1'
        >
          {props.dark ? <Sun strokeWidth={2.25} /> : <Moon strokeWidth={2.25} />}
          {props.dark ? 'Light Mode' : 'Dark Mode'}
        </h3>

      </nav>
    </div>
  )
}

export default Navbar