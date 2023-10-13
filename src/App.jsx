import { useEffect, useState } from 'react'
import './App.css'
import PlayersData from "./utils/PlayersData"
import './components/style.css'

import LoadingScreen from './components/LoadingScreen'
import ScoreCard from './components/ScoreCard'
import Cards from './components/Cards'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [hasWinner, setHasWinner] = useState(false)


  // console.log(PlayersData, "this is the datra of players")
  //handle the synchronization of external state to current one
  useEffect(() =>{
    if(score===8) {
      setHasWinner(true);
      setGameOver(true);
    }
  },[score])

  //Launch the main screen
  const handleGameStart = () => {
    setIsLoading(!isLoading);
    setGameOver(false);
  }

  //handle the game on click of card
  const handleScoreChange = (card)=> {
    console.log(card, ';this is a card manm')
    console.log(clickedCards, 'clicked cards')
    shuffleCards(PlayersData);
    if(clickedCards.includes(card.id)) {
      setGameOver(true);
    }else {
      const newScore = score+1;
      setScore(newScore);
      setClickedCards([...clickedCards, card.id]);
    }
  }

  //algorithm to shuffle card
  const shuffleCards= (players) => {
    for(let i = players.length-1; i>0; i--) {
      const j = Math.floor(Math.random() * i+1);
      //shuffle cards
      [players[i], players[j]] = [players[j], players[i]];
    }
  }

  //reset the game 
  const resetGame = () => {
    setIsLoading(true);
    setGameOver(false);
    setScore(0);
    setHasWinner(false);
    setClickedCards([]);
  }
  return (
    <>
    {
      //Screen is still Loading?
      isLoading? (
        <LoadingScreen
          handleGameStart = {handleGameStart}
        />
      ) : (
        <div>
          {
            //Game is not over?
            !gameOver? (
              <div>
                <ScoreCard
                  score={score}
                />
                <Cards
                  playersData = {PlayersData}
                  handleClick = {handleScoreChange}
                />
              </div>
            ) : (
              <div>
              {
                //Game has winner?
                hasWinner? (
                  <div className='winner-message'>
                    <h2>Congrtulations! You Won.</h2>
                    <button
                      onClick={resetGame}
                    >Restart</button>
                  </div>
                ) : (
                  <div className='loser-message'>
                    <h2>Unfortunately You Lose!</h2>
                    <button
                    onClick={resetGame}>Restart</button>
                  </div>
                )
              }
              </div>
            )
          }
        </div>
      )
    }
      
    </>
  )
}

export default App
