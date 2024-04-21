'use client'
import Input from '@/components/Input'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
const forgotPasswordSchema = z.object({
    email:z.string({
        required_error:'Name is required'
    }).email('Invalid email'),
})
const ForgotPassword = () => {
  const {handleSubmit, reset, register,formState: {errors}} = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver:zodResolver(forgotPasswordSchema),
    mode:'onBlur'
  })
  const [sending, setSending] = useState(false)
  const {push} = useRouter()
  
  const submitHandler = async (data: z.infer<typeof forgotPasswordSchema>) => {
    try {
        setSending(true)
        // Submit email to api

        push(`/forgot-password/sent?email=${data.email}`)
    } catch (error) {
        console.error(error)
    } finally{
        setSending(false)
    }
  }
  return (
    <>
    <main  className="min-h-screen grid place-items-center">
        <div  className="w-3/4 max-w-[350px]">

        <h1 className="text-2xl mb-4 font-bold  text-center">Forgot Password</h1>
        <p className='text-gray-800 font-normal mb-2'>Enter your email</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(submitHandler,(err)=> console.error(err))}>
            <Input title={''} id='email' type='email' register={register('email',{
                required:true
            })}  errorMessage={errors.email  && errors.email.message}/>
            <button
              className={`h-8 rounded-md bg-black flex items-center justify-center text-white text-sm`}
              disabled={sending}
            >
              {sending ? (
                <span className="w-4 h-4 rounded-full border-2 border-l-transparent border-white animate-spin "></span>
              ) : (
                "Send"
              )}
            </button>
        </form>
        </div>
    </main>
    <head>
        <title>Forgot Password</title>
    </head>
    </>
  )
}

export default ForgotPassword