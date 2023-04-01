// @flow
import * as React from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  name: string
  className?: string
  placeholder?: string
  errorMessage?: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export function Input({ type, rules, errorMessage, className, name, register, placeholder }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />

      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  )
}
