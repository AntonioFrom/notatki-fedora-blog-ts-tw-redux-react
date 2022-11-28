import React, { FC } from 'react'
import Container from './container.component'



interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <main className=' bg-green-500 shadow-sm text-white p-8 mb-8'>
            <Container>
                <h1 className=' font-titillium drop-shadow-xl font-bold text-center text-[3.5rem]'> conduit</h1>
                <p className='text-center text-2xl'> A place to share your knowledge</p>
            </Container>
    </main>
  )
}
