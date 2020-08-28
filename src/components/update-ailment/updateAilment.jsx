import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axiosWithAuth from '../../utils/auth/axiosWithAuth'
import useForm from '../../utils/hooks/useForm'
import { TextField, Button } from '@material-ui/core'
import { updateAilment } from '../../redux/actions'

const UpdateAilment = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        description: ''
    })

    const ailments = useSelector(state => state.ailments)

    const history = useHistory()
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        let ailment = ailments.find(ail => ail._id == params.id)

        setFormValues(ailment || {})
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let newAilment = {
            id: formValues._id,
            name: formValues.name,
            description: formValues.description
        }

        dispatch(updateAilment(newAilment, history))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='text-field-containers'>
                <TextField
                    value={formValues.name}
                    onChange={handleChange}
                    color='secondary'
                    type='text'
                    label='name'
                    name='name'
                    required></TextField>
                <TextField
                    value={formValues.description}
                    onChange={handleChange}
                    color='secondary'
                    label='description'
                    name='description'
                    multiline
                    rows={5}></TextField>
      
                <Button type="submit" color='secondary' variant='outlined' id='submit-btn'>Get recommendation</Button>
            </div>
        </form>
    )
}

export default UpdateAilment