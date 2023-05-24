
import './App.css';
import {useEffect, useState} from 'react';
import Player from './components/Player';
import rock from './images/Rock.png';
import paper from './images/Paper.png';
import scissors from './images/Scissors.png';
import {Button, Card, CardContent, Grid, IconButton} from '@mui/material';

const icons = [rock, paper, scissors]

const options = ['ROCK', 'PAPER', 'SCISSORS']

function App()  {
  const [playerSelection, setPlayerSelection] = useState(-1)
  const [SystemSelection, setSystemSelection] = useState(-1)

  const clear = () => {
    setPlayerSelection(-1)
    setSystemSelection(-1)
  }

  const roundPlayed = playerSelection !== -1 && SystemSelection !== -1

  const onPlayerSelection = (playerSelection) => {
    setPlayerSelection(playerSelection)
  }

  const onSystemSelection = (SystemSelection) => {
    setSystemSelection(SystemSelection)
  }

  useEffect(() => {
    if (playerSelection && SystemSelection) {
      console.log('playerSelection', playerSelection)
      console.log('SystemSelection', SystemSelection)
    }
  }, [playerSelection, SystemSelection])

  useEffect(() => {
    if (playerSelection !== -1) {
      onSystemSelection(Math.floor(Math.random() * 3))
    }
  }, [playerSelection])

  const getWinner = () => {
    if (playerSelection === SystemSelection) {
      return 'Tie'
    } else if (playerSelection === 0 && SystemSelection === 1) {
      return 'System'
    } else if (playerSelection === 0 && SystemSelection === 2) {
      return 'Player'
    } else if (playerSelection === 1 && SystemSelection === 0) {
      return 'Player'
    } else if (playerSelection === 1 && SystemSelection === 2) {
      return 'System'
    } else if (playerSelection === 2 && SystemSelection === 0) {
      return 'System'
    } else if (playerSelection === 2 && SystemSelection === 1) {
      return 'Player'
    }
  }

  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid item>
          <h1> Rock Paper Scissors </h1>
        </Grid>
      </Grid>

      <Grid container justifyContent={'center'} spacing={2}>
        <Grid item>
          <Card sx={{minWidth: 175, height: 200, textAlign: 'center'}}>
            <CardContent>
              <h4>Player</h4>
              {playerSelection !== -1 && (
                <img src={icons[playerSelection]} width={60} height={60} />
              )}

              <p>{options[playerSelection]}</p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{minWidth: 175, height: 200, textAlign: 'center'}}>
            <CardContent>
              <h4>System</h4>
              {SystemSelection !== -1 && (
                <img src={icons[SystemSelection]} width={60} height={60} />
              )}
              <p>{options[SystemSelection]}</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{marginBottom: 24}}></div>

      <Grid container justifyContent={'center'} spacing={2}>
        <Grid item>
          <IconButton
            onClick={() => onPlayerSelection(0)}
            disabled={roundPlayed}
          >
            <img src={rock} height={60} width={60} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => onPlayerSelection(1)}
            disabled={roundPlayed}
          >
            <img src={paper} height={60} width={60} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => onPlayerSelection(2)}
            disabled={roundPlayed}
            color="primary"
          >
            <img src={scissors} height={60} width={60} />
          </IconButton>
        </Grid>
      </Grid>

      <div style={{marginBottom: 24}}></div>

      {roundPlayed && (
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          spacing={4}
        >
          <Grid item>
            <h2>
              {getWinner() === 'Tie' ? 'Its a Tie' : `${getWinner()} Wins`}
            </h2>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={clear}
              disabled={!roundPlayed}
            >
              Play Again
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default App;
