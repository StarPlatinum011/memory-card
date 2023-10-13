import PropTypes from 'prop-types'

 function Card({playersData, handleClick}) {

    return(
        <div className='main-card'>
            {playersData.map((player) => {
                return(
                    <div
                        className='player-card'
                        key= {player.id}
                        onClick={()=> handleClick(player)}
                        >
                        <img
                            src={player.src}
                            alt={player.name}
                        />
                        <h3>{player.name}</h3>
                    </div>
                    
                )
            })
            }
        </div>
        
    )
}

Card.propTypes= {
    playersData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            isClicked: PropTypes.bool.isRequired
        })
    ).isRequired,

    handleClick: PropTypes.func
}

export default Card;