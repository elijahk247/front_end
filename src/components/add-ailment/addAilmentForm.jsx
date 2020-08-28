import React from 'react'
import useForm from '../../utils/hooks/useForm'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { postAilment } from '../../redux/actions'
import { useHistory } from 'react-router-dom'


const INITIAL_VALUES = {
    name: "some name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem corporis vel iste porro quo aut rem mollitia reprehenderit. Deleniti molestias, sequi expedita aperiam accusantium quod necessitatibus ducimus modi ab"
}

const AddAilmentForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [formValues, handleChange] = useForm(INITIAL_VALUES)

    const handleSubmit = (e) => {
        e.preventDefault()
        let ailment = {
            name: formValues.name,
            description: formValues.description,
            input_phrase: formValues.input_phrase
        }
        console.log(ailment)
        dispatch(postAilment(ailment, history))
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
                    required>
                </TextField>
                <TextField
                    value={formValues.description}
                    onChange={handleChange}
                    color='secondary'
                    label='description'
                    name='description'
                    multiline
                    rows={5}>
                </TextField>
                <TextField
                    value={formValues.input_phrase}
                    onChange={handleChange}
                    color='secondary'
                    label='properties'
                    name='input_phrase'
                >
                </TextField>
                <Button type="submit" color='secondary' variant='outlined' id='submit-btn'>Get recommendation</Button>
            </div>
        </form>
    )
}

export default AddAilmentForm