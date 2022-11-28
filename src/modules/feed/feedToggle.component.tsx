import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface FeedToggleProps {}

export const FeedToggle:FC<FeedToggleProps> = () => {
  return (
    <div className=' text-green-900 text-lg border-b-2 border-green-900 px-2 w-fit py-2 '>
        <ul>
            <li>
                <NavLink to="/">Global Feed</NavLink>
            </li>
        </ul>
    </div>
  )
}
