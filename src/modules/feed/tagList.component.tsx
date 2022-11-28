import React, { FC } from 'react'

interface TagListProps {
    list: string[]
}

export const TagList: FC<TagListProps> = ({list}) => {
  return (
    <ul className=' flex justify-end '>
        {list.map((tag, index) => (
        <li key={index} className='font-light text-sm border border-gray-400 px-2 py-1 mx-1 rounded-sm'>{tag}</li>
        ))}           
    </ul>
  )
}
