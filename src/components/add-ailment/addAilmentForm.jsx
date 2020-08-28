import React, { useState } from 'react'
import useForm from '../../utils/hooks/useForm'
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { postAilment } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import Stepper from '../stepper/stepper'
import './addAilment.styles.scss'

const INITIAL_VALUES = {
    name: "some name",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem corporis vel iste porro quo aut rem mollitia reprehenderit. Deleniti molestias, sequi expedita aperiam accusantium quod necessitatibus ducimus modi ab",
    flavors: 'blueberry cherry apple',
    effects: 'sleepy'
}

const AddAilmentForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [activeStep, setActiveStep] = useState(0);

    const [formValues, handleChange] = useForm(INITIAL_VALUES)

    const handleSubmit = (e) => {
        e.preventDefault()

        const input_phrase = formValues.effects.concat(' ', formValues.flavors).trim()

        let ailment = {
            name: formValues.name,
            description: formValues.description,
            input_phrase
        }

        dispatch(postAilment(ailment, history))
    }

    return (
        <form className='add-form'>



            <div className='test-container'>

                {
                    activeStep == 0 &&
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
                    </div>
                }

                {
                    activeStep == 1 &&
                    <div className="text-field-containers">
                        <TextField
                            value={formValues.flavors}
                            onChange={handleChange}
                            color='secondary'
                            label='flavors'
                            name='flavors'
                        >
                        </TextField>
                    </div>
                }

                {
                    activeStep == 2 &&
                    <div className="text-field-containers">
                        <TextField
                            value={formValues.effects}
                            onChange={handleChange}
                            color='secondary'
                            label='effects'
                            name='effects'
                        >
                        </TextField>
                    </div>
                }

                {
                    activeStep == 3 && <div>Fourth</div>
                }



            </div>
            <div className='stepper'>
                <Stepper activeStep={activeStep} setActiveStep={setActiveStep} handleSubmit={handleSubmit}></Stepper>
            </div>
        </form>



    )
}

{/* <TextField
    value={formValues.input_phrase}
    onChange={handleChange}
    color='secondary'
    label='properties'
    name='input_phrase'
>
</TextField> */}
export default AddAilmentForm