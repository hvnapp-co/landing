'use client'

import type { CSSProperties } from 'react'

type FeedbackButtonProps = {
  className?: string,
  style?: CSSProperties,
}

export const FeedbackButton = ({ className, style }: FeedbackButtonProps) => {
  const handleFeedback = () => {
    const subject = encodeURIComponent('Bug Report — Haven App')
    const body = encodeURIComponent(
      'What happened:\n\n\nSteps to reproduce:\n\n\nDevice & OS version:\n'
    )
    window.open(`mailto:founder@hvnapp.co?subject=${subject}&body=${body}`)
  }

  return (
    <button
      onClick={handleFeedback}
      className={className}
      style={style}
    >
      Report a bug →
    </button>
  )
}
