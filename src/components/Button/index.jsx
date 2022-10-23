import React from 'react'

const borderStyles = 'border-2 border-almost-black dark:border-white rounded-lg'
const filledStyles = 'text-white bg-black dark:text-almost-white rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black'

const Button = ({
    children = '',
    hasBorder = false,
    isFilled = false
}) => {
  return (
    <button className={`flex items-center text-medium-gray dark:text-white px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>
        {children}
    </button>
  )
}

export default Button