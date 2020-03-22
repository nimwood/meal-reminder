
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
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
  },
  button: {
    margin: theme.spacing(1)
  }
})

class ReminderCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditable: false
    }
  }

  getCardActions() {
    const { classes } = this.props
    const { isEditable } = this.state

    if (isEditable) {
      return (
        <CardActions>
          <Button variant="outlined" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button onClick={() => { this.setState({ isEditable: false }) }} variant="outined" color="secondary" className={classes.button} startIcon={<EditIcon />}>
            Save
          </Button>
        </CardActions>
      )
    }
    return (
      <CardActions>
        <Button variant="outlined" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button onClick={() => { this.setState({ isEditable: true }) }} variant="outined" color="secondary" className={classes.button} startIcon={<EditIcon />}>
          Edit
        </Button>
      </CardActions>
    )
  }

  getCardContent() {
    const { isEditable } = this.state
    const { classes, card } = this.props

    if (isEditable) {
      return (
        <CardContent className={classes.cardContent}>
          <TextField id="outlined-search" type="text" value={card.heading} />
          <Typography>
            {card.description}
          </Typography>
        </CardContent>
      )
    }
    return (

      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.heading}
        </Typography>
        <Typography>
          {card.description}
        </Typography>
      </CardContent>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <>
        <Card className={classes.card}>
          {this.getCardContent()}
          {this.getCardActions()}
        </Card>
      </>
    )
  }
}

ReminderCard.propTypes = {
  card: PropTypes.object,
  classes: PropTypes.object.isRequired
}

ReminderCard.defaultProps = {
  card: {}
}

export default withStyles(styles)(ReminderCard)
