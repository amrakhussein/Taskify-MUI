import { useState } from 'react'

export const useForm = (initialize = {}) => {
  const [values, setValues] = useState(initialize)

  const handleChange = (e) => {
    // e.persist() no need as of v17
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  return [values, handleChange]
}
