import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

type RegisterFields = {
  name: string
  email: string
  password: string
}

function useRegister() {
  const [fields, setFields] = useState<RegisterFields>({ name: '', email: '', password: '' })

  const handleChange = (field: keyof RegisterFields) => (event: ChangeEvent<HTMLInputElement>) => {
    setFields((currentFields) => ({ ...currentFields, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return { fields, handleChange, handleSubmit }
}

export default useRegister
