import PropTypes from 'prop-types'
export default function StartTheGame({handleGameStart}) {

    return(
        <div className='loading-screen'>
            <h1>Welcome to Real Madrid Memory Challenge</h1>
            <h3>Click the button to start</h3>
            <button
                onClick={handleGameStart}
            > Start</button>
        </div>
    )
}

//define the proptypes
StartTheGame.propTypes = {
    handleGameStart: PropTypes.func.isRequired,
}
