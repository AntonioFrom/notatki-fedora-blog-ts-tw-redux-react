import  { FC, PropsWithChildren } from 'react'

interface ContainerProps{}

const Container: FC<PropsWithChildren<ContainerProps>> = ({children}) => {
  return (
    <div className='container mx-auto'>{children}</div>
  )
}

export default Container