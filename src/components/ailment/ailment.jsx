import React from 'react'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { deleteAilment } from '../../redux/actions'

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 140,
    },
});

const Ailment = ({ name, description, id }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleRedirect = () => {
        history.push(`/update-ailment/${id}`)
    }

    const handleDelete = () => {
        dispatch(deleteAilment(id, history))
    }

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://media.growdiaries.com/static/post/photo/2918/233514_granddaddy-purplemsnlgrand-daddy-purp.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description.slice(0,200) + "..."}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant='contained' onClick={handleRedirect}>
                    Edit
                 </Button>
                <Button size="small" color="secondary" variant='contained' onClick={handleDelete}>
                    Delete
                 </Button>
            </CardActions>
        </Card>
    )
}

export default Ailment