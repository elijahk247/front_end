import { useState } from 'react'

const useForm = (INITIAL) => {
    const [formValues, setFormValues] = useState(INITIAL)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    return [formValues, handleChange]
}

export default useForm