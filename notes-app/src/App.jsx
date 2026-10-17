import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Bottom from './components/Bottom'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [Task, setTask] = useState([])
  const [dark, setDark] = useState(false)
  const [now, setNow] = useState(Date.now())
  const [page, setPage] = useState('notes')
  const [editIdx, setEditIdx] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, 30000)
    return () => clearInterval(timer)
  }, [])

  const SubmitHandler = (elem) => {
    elem.preventDefault()

    const copyTask = [...Task]

    if (editIdx !== null) {
      // purana note update hoga
      copyTask[editIdx] = { ...copyTask[editIdx], title, detail, time: Date.now() }
      setEditIdx(null)
    } else {
      // naya note banega
      copyTask.push({ title, detail, fav: false, time: Date.now() })
    }

    setTask(copyTask)
    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...Task]
    copyTask.splice(idx, 1)
    setTask(copyTask)

    setEditIdx(null)
    setTitle('')
    setDetail('')
  }

  const favNote = (idx) => {
    const copyTask = [...Task]
    copyTask[idx] = { ...copyTask[idx], fav: !copyTask[idx].fav }
    setTask(copyTask)
  }

  const editNote = (idx) => {
    setTitle(Task[idx].title)
    setDetail(Task[idx].detail)
    setEditIdx(idx)
    setPage('notes')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditIdx(null)
    setTitle('')
    setDetail('')
  }

  const toggleDark = () => {
    setDark(!dark)
  }

  const timeAgo = (time) => {
    if (!time) return 'Just now'
    const sec = Math.floor((now - time) / 1000)
    if (sec < 60) return 'Just now'
    const min = Math.floor(sec / 60)
    if (min < 60) return min + ' min ago'
    const hr = Math.floor(min / 60)
    if (hr < 24) return hr + ' hr ago'
    return Math.floor(hr / 24) + ' day ago'
  }

  const totalCount = Task.length
  const favCount = Task.filter((t) => t.fav).length

  return (
    <div className={`min-h-screen lg:flex ${dark ? 'bg-black text-white' : 'bg-teal-50 text-black'}`}>

      <Navbar
        dark={dark}
        toggleDark={toggleDark}
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        favCount={favCount}
      />

      <div className='flex-1 flex flex-col'>
        {page === 'notes' && (
          <Top
            dark={dark}
            title={title}
            setTitle={setTitle}
            detail={detail}
            setDetail={setDetail}
            SubmitHandler={SubmitHandler}
            editIdx={editIdx}
            cancelEdit={cancelEdit}
          />
        )}

        <Bottom
          dark={dark}
          page={page}
          Task={Task}
          favCount={favCount}
          deleteNote={deleteNote}
          favNote={favNote}
          editNote={editNote}
          timeAgo={timeAgo}
        />
      </div>

    </div>
  )
}

export default App