'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
      setProgress(Math.min(Math.max(nextProgress, 0), 100))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-orange-400 shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
