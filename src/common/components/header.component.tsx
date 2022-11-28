import clsx from 'clsx'
import  { FC } from 'react'
import { Link, NavLink } from "react-router-dom"
import Container from './container.component'

interface HeaderProps { }

export const Header: FC<HeaderProps> = ({ }) => {

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx('py-4 hover:text-black/60 hover:no-underline', {
            "text-black/30" : !isActive,
            "text-black hover:text-black": isActive
        })

    return (
        <header>
            <nav className='px-2 py-4'>
                <Container>

                    <div className=' flex justify-between items-center'>
                        <Link to="/" className=' font-titillium text-2xl font-bold text-green-600 mr-8'>
                            Blog
                        </Link>
                        <ul className=' pl-0 mb-0 list-none flex'>
                            <li className='ml-4'>
                                <NavLink to="/" className={navLinkClasses}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='ml-4'>
                                <NavLink to="/sign-in" className={navLinkClasses}>
                                    Sign In
                                </NavLink>
                            </li>
                            <li className='ml-4'>
                                <NavLink to="/sign-up" className={navLinkClasses}>
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </Container>
            </nav>
        </header>
    )
}
