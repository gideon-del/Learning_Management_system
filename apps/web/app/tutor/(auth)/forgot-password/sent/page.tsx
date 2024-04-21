'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const Sent = () => {
    const searchParam = useSearchParams()
     const {email} = Object.fromEntries(searchParam.entries())
     const [sending, setSending] = useState(false)
     const {back} = useRouter();
     const resendLink = async () => {
        try {
            setSending(true)
        } catch (error) {
            
        } finally{
            setSending(false)
        }
     }
     useEffect(() => {
         if(!email){
           back()
         }

     },[])
  return (
    <>
    <main  className="min-h-screen grid place-items-center">
        <div  className="w-3/4 max-w-[350px]">

        <h1 className="text-2xl mb-4 font-bold  text-center">Sent</h1>
        <p className='text-gray-800 font-normal mb-2 text-center'>A recovery link has been sent to {email}</p>
       <div>
        <button
              className={`h-8 w-full rounded-md bg-black flex items-center justify-center text-white text-sm`}
              disabled={sending}
              onClick={resendLink}
            >
              {sending ? (
                <span className="w-4 h-4 rounded-full border-2 border-l-transparent border-white animate-spin "></span>
              ) : (
                "Resend link"
              )}
            </button>
            </div>
        </div>
    </main>
    <head>
        <title>Sent</title>
    </head>
    </>
  )
}

export default Sent