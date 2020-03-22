import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import AccessAlarm from '@material-ui/icons/AccessAlarm'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import RemindersGrid from './components/RemindersGrid'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const reminders = [
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

export default function MealReminder() {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccessAlarm className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Meal Reminder
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Meal reminder
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Create reminders to remind you when you should have your meals and snacks throughout the day.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Create new reminder
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <RemindersGrid />
      </main>
    </>
  )
}
