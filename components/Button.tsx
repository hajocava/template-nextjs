import React, { FC } from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-11 rounded bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
    >
      {label}
    </button>
  )
}
