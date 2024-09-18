import { useState } from 'react'

interface SwitchProps {
  isSwitched: boolean
  handleSwitch: () => void
}

export default function Switch({ isSwitched, handleSwitch }: SwitchProps) {
  return (
    <button
      className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-600"
      onClick={handleSwitch}
    >
      <div
        className={`size-5 rounded-full bg-white transition-transform ${
          isSwitched ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  )
}
