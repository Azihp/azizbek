import './block.css'


function Block(props) {
    return(
        <div className="cart2">
            <img className="cart2_img" src={props.img}/>
            <p className="cart2_p">{props.p}</p>
        </div>
    )
}
export default Block