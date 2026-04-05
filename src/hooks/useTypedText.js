import { useEffect, useState } from 'react'

export function useTypedText(texts, typingSpeed = 80, deleteSpeed = 40, pauseMs = 2000) {
  const [idx, setIdx] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[idx]
    let timeout

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && display === '') {
      setDeleting(false)
      setIdx(i => (i + 1) % texts.length)
    } else {
      timeout = setTimeout(() => {
        setDisplay(s =>
          deleting ? s.slice(0, -1) : current.slice(0, s.length + 1)
        )
      }, deleting ? deleteSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [display, deleting, idx, texts, typingSpeed, deleteSpeed, pauseMs])

  return display
}
