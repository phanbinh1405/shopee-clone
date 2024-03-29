// @flow
import * as React from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export function Input({
  type,
  rules,
  errorMessage,
  className,
  name,
  register,
  placeholder,
  classNameInput = 'w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm',
  classNameError = 'mt-1 min-h-[1.25rem] text-sm text-red-600'
}: Props) {
  const registerResolve = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input type={type} className={classNameInput} placeholder={placeholder} {...registerResolve} />

      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
export default Input