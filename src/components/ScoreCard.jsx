import Proptypes from 'prop-types'

export default function ScoreCard({score}) {
    return(
        <div className='score-board'>
            <h3> Current Score : {score}</h3>
        </div>
    )
}

ScoreCard.propTypes = {
    score: Proptypes.number.isRequired,
}
