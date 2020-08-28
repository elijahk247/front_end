import React, { useState } from 'react'
import useForm from '../../utils/hooks/useForm'
import { TextField, Button, Input } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { postAilment } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import Stepper from '../stepper/stepper'
import './addAilment.styles.scss'

import { green } from '@material-ui/core/colors/';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import { flavors } from '../../utils/data/flavorsData'
import { effects } from '../../utils/data/effectsData'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        color: green[200],
        '& > *': {
            margin: theme.spacing(0.8),
        },
    },
}));




const INITIAL_VALUES = {}

const AddAilmentForm = () => {

    const [chipValues, setChipValues] = useState([])
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [activeStep, setActiveStep] = useState(0);

    const [formValues, handleChange] = useForm(INITIAL_VALUES)

    const handleClick = (e) => {
        let target = e.currentTarget.innerText


        // check if chip already exists and remove it

        if (chipValues.includes(target)) {
            let workbench = [...chipValues]
            workbench.forEach((chip, idx) => {
                if (chip == target) {
                    console.log('found a match')
                    workbench.splice(idx, 1)
                }
            })
            setChipValues(workbench)
            return
        }

        setChipValues([
            ...chipValues,
            target
        ])
    }

    const handleDelete = () => {
        console.log('deleted')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let input_phrase = chipValues.join(' ').trim()

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
                    <div>
                        {
                            flavors.map(flavor => {
                                return <Chip style={{ margin: '4px' }} className={chipValues.includes(flavor) ? 'isClicked' : ''} onClick={handleClick} name={flavor} type='checkbox' label={flavor} clickable ></Chip>
                            })
                        }
                    </div>


                }

                {
                    activeStep == 2 &&
                    <div className={classes.root} >
                        {
                            effects.map(effect => {

                                return (
                                    <Chip className={chipValues.includes(effect) ? 'isClicked' : ''} onClick={handleClick} name={effect} type='checkbox' label={effect} clickable ></Chip>
                                )
                            })
                        }
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