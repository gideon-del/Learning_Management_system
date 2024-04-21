import React from 'react'
import {UseFormRegisterReturn} from 'react-hook-form'
type InputProp ={
    title: string;
    id: string;
    register?: UseFormRegisterReturn<any>;
    type?: string;
    errorMessage?: string;
}
const Input = (prop: InputProp) => {
  return (
    <fieldset className="flex flex-col gap-1">
    <label htmlFor={prop.id} className='capitalize'>{prop.title}</label>
    <input
      {...prop.register}
      id={prop.id}
      type={prop.type || 'text'}
      className="h-8 rounded-md border-gray-500 border-2 px-3 text-lg    "
    />
    {prop.errorMessage && <p className='text-red-500 font-normal text-base'>{prop.errorMessage}</p>}
  </fieldset>
  )
}

export default Input