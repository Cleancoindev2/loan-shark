import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    maxWidth: 345,
    maxHeight: 500,
    margin: 20,
    minWidth: 256,
  },
  media: {
    height: 140,
  },
}

const ForLoanNftCard = props =>  {
  const { classes, item = {} } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price}
            {item.duration}
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Borrow
        </Button>
        <Button size="small" color="primary">
          Clawback
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(ForLoanNftCard)