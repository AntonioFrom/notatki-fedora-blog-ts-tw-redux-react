import  { FC } from 'react'
import { AiFillHeart } from "react-icons/ai";

interface FavoriteButtonProps {
    count: number
 }

export const FavoriteButton: FC<FavoriteButtonProps> = ({count }) => {

    return (
        <>
            <button className=' flex items-center border-green-900 leading-5 text-center align-middle
             select-none border py-1 px-2 text-sm rounded-lg hover:text-white hover:bg-green-900  text-green-900'>
                <AiFillHeart className=' ' />
                <span className=' ml-2'>{count}</span>
            </button>
        </>
    )
}
