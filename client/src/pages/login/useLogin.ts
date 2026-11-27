import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type LoginFields = {
  email: string
  password: string
}

function useLogin() {
  const [fields, setFields] = useState<LoginFields>({ email: '', password: '' })

  const handleChange = (field: keyof LoginFields) => (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentFields) => ({ ...currentFields, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return { fields, handleChange, handleSubmit }
}

export default useLogin
