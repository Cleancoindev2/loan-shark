import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Web3 from 'web3'

const styles = {
  root: {
    width: 300,
    height: 500,
    margin: 20,
    fontFamily: 'Spartan',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    boxShadow: '3px 3px 5px 6px #ccc',
  },
  textGroup: {

  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 20,
  },
  cardText: {
    maxHeight: 230,
    fontSize: 12,
    overflow: 'scroll',
    lineHeight: 1.25,
  },
  borrowButton: {
    backgroundColor: '#5e6fe6',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
    outline: 'none',
    border: 'none',
    borderRadius: 3,
    height: 34,
    width: 100,
    color: '#FFFFFF',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#bca049',
      color: '#000080'
    }
  },
  clawbackButton: {
    backgroundColor: '#b52114',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
    outline: 'none',
    border: 'none',
    borderRadius: 3,
    height: 34,
    width: 100,
    color: '#FFFFFF',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#69120b',
    }
  },
  imageContainer: {
    minHeight: 100,
    maxHeight: 469,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: 250,
    maxHeight: 320,
    marginTop: 10,
  },
}


const date = (d) => `${new Date(d * 1000).toDateString()} ${new Date(d * 1000).toLocaleTimeString()}`

const shortAddress = (address) => {
 return `${address.substring(0, 6)}...${address.substring(address.length - 6, address.length)}`;
}

const toDai = (value) => {
 return `$${Web3.utils.fromWei(value, 'ether')}`;
}

const LoandNft = props =>  {
  const { classes, item = {}, balance = 0, } = props


  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img src={item.image} className={classes.image} />
      </div>
      <div className={classes.textGroup}>
        <CardContent>
          <div className={classes.cardTitle}>
            {item.name}
          </div>
          <div className={classes.cardText}>
            From: {date(item.start)} <br/>
            To: {date(item.end)}
            <br/>
            <br/>
            Total charged: {toDai(item.balance)}
            <br />
            <br />
            Lender: {shortAddress(item.lender)} <br />
            Borrower: {shortAddress(item.borrower)}
          </div>
        </CardContent>
      </div>
    </div>
  )
}

export default withStyles(styles)(LoandNft)
