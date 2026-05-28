'use client'

type FeedbackButtonProps = {
  className?: string,
}

export const FeedbackButton = ({ className }: FeedbackButtonProps) => {
  const handleFeedback = () => {
    const subject = encodeURIComponent('Bug Report — Haven App')
    const body = encodeURIComponent(
      'What happened:\n\n\nSteps to reproduce:\n\n\nDevice & OS version:\n'
    )
    window.open(`mailto:founder@hvnapp.co?subject=${subject}&body=${body}`)
  }

  return (
    <button onClick={handleFeedback} className={className}>
      Report a bug →
    </button>
  )
}
