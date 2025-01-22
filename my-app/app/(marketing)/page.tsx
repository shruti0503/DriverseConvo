import React from 'react'
import Header from './Header'

type Props={
    children:React.ReactNode;
}

const Marketing = ({children}:Props) => {
  return (
    <div>
        <main className='flex-1 flex flex-col items-center justify-center'>
            {children}

        </main>
    </div>
  )
}

export default Marketing