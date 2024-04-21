import React from 'react'

const Register = () => {
    /*
    1) Name
    2)Email
    3)Password
    */
  return (
    <>
    <head>
        <title>Register</title>
    </head>
    <main className='min-h-screen grid place-items-center'>
        <div className='w-3/4 max-w-[400px]'>
            <h1 className='text-2xl mb-4 font-bold  text-center'>Create account</h1>
            <form className='flex flex-col gap-3'>
                <fieldset className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' className='h-8 rounded-md border-gray-500 border-2 px-3 text-lg    ' />
                </fieldset>
                <fieldset className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email' className='h-8 rounded-md border-gray-500 border-2 px-3 text-lg    ' />
                </fieldset>
                <fieldset className='flex flex-col gap-1'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' className='h-8 rounded-md border-gray-500 border-2 px-3 text-lg    ' />
                </fieldset>
                <button  className='h-8 rounded-md bg-black flex items-center justify-center text-white text-sm'>Create account</button>
            </form>
        </div>
    </main>
    </>
  )
}

export default Register