import Block from './block'
import './block.css'
import img11 from './img/5799687 1 (1).png'
import img12 from './img/move 1.png'
import img13 from './img/breath 1.png'
import img14 from './img/social 1.png'
import img15 from './img/music 1.png'
import img16 from './img/Frame.png'
import img17 from './img/Frame (1).png'
import img18 from './img/Frame (2).png'
function Card2() {
    let user=[
        {id:1, img: img11 , p:'Play & Games'},
        {id:2, img: img12 , p:'movement'},
        {id:3, img: img13 , p:'Breathwork'},
        {id:4, img: img14 , p:'Social Emotional Learning'},
        {id:5, img: img15 , p:'Music and Dance'},
        {id:6, img: img16 , p:'Art Therapy'},
        {id:7, img: img17 , p:'Creative Writing'},
        {id:8, img: img18 , p:'Reading'},
    ]
    return(
        <div className='fg5we'>
            {user.map((tt)=>{
            return <Block key={tt.id} img={tt.img} p={tt.p}/>
            })}
        </div>
    )
}
export default Card2