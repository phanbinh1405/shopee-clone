import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions
}

interface FormData {
  email: string
  password: string
  confirm_password: string
}

// sử dụng cài đặt mặc định cho validate form

export const getRules = (getValue?: UseFormGetValues<FormData>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc '
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng!'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc '
    },

    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 5 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc '
    },

    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    validate:
      typeof getValue === 'function'
        ? (confirmPasswordValue) => confirmPasswordValue === getValue('password') || 'Nhập lại password không khớp'
        : undefined
  }
})

// Sử dụng yup để validate form

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng!')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'), // chính bản thân nó cũng là schema
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
})

export const loginSchema = schema.omit(['confirm_password'])

// Create a type from schema
export type LoginSchema = yup.InferType<typeof schema>
export type FormDataSchema = yup.InferType<typeof schema>
