import cardimg from '/vite.svg'

function Card() {
    return (
        <div className='card'>
            <img className='cardimg' src={cardimg} alt="react logo" width="150px" />
            <h1 className='cardtitle'>React</h1>
            <p className='cardtext'>i'm youtube to self learning for web development.</p>
        </div>

    )
}


export default Card;