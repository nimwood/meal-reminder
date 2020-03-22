import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core/styles'
import ReminderCard from './ReminderCard'

const styles = (theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
})

class RemindersGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [
        {
          heading: 'heading1',
          description: 'This is the first description'
        },
        {
          heading: 'heading2',
          description: 'You should go eat a cookie'
        },
        {
          heading: 'heading3',
          description: 'Time to have dinner'
        }
      ]
    }
  }

  render() {
    const { reminders } = this.state
    const { classes } = this.props

    return (
      <>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} direction="column">
            {reminders.map((card) => (
              <Grid item key={card.id}>
                <ReminderCard card={card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    )
  }
}

RemindersGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RemindersGrid)
