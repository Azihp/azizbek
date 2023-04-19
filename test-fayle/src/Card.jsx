import './Caed.css'

const Card =(props) =>{
    return(
        <div className="card">
       <img src={props.img} className='card_img' alt="" />
       <h1 className='card_h1'>{props.big}</h1>
       <p className='card_p'>{props.text}</p>
        </div>
    )
}
export default Card