
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  }
}))

export default function EditableReminderCard(props) {
  const { card } = props
  const classes = useStyles()

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.heading}
          </Typography>
          <Typography>
            {card.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="outined" color="secondary" className={classes.button} startIcon={<EditIcon />}>
            Save
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

EditableReminderCard.propTypes = {
  card: PropTypes.object
}

EditableReminderCard.defaultProps = {
  card: {}
}
