'use client'

const BAR_CLASSES = ['eq-bar-1', 'eq-bar-2', 'eq-bar-3', 'eq-bar-4', 'eq-bar-5'] as const

interface Props {
  count?: number
  color?: string
  barWidth?: number
  barHeight?: number
  className?: string
}

export default function EqualizerBars({
  count = 5,
  color = '#8B5CF6',
  barWidth = 4,
  barHeight = 32,
  className = '',
}: Props) {
  return (
    <div
      className={`flex items-end gap-[3px] ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`rounded-sm ${BAR_CLASSES[i % BAR_CLASSES.length]}`}
          style={{
            width: barWidth,
            height: barHeight,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  )
}
