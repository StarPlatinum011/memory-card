import { useState } from 'react'
import './App.css'

import LoadingScreen from './components/LoadingScreen'
import ScoreCard from './components/ScoreCard'
import Cards from './components/Cards'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [hasWinner, setHasWinner] = useState(false)

const handleGameStart = () => {
  setIsLoading(false);
  setGameOver(false);
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
                <Cards/>
              </div>
            ) : (
              <div>
              {
                //Game has winner?
                hasWinner? (
                  <div>
                    <h2>Congrtulations!</h2>
                    <button>Restart</button>
                  </div>
                ) : (
                  <div>
                    <h2>Unfortunately You Lose!</h2>
                    <button>Restart</button>
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
