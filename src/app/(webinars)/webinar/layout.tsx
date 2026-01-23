import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-gradient-to-r from-rose-300 to-orange-200'>
        {children}
    </div>
  )
}

export default layout