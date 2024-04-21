import React, { ReactNode } from 'react'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <header className='min-h-20 bg-gray-300'></header>
        <main className='container mx-auto py-10 px-5'>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout