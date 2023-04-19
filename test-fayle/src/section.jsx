import './section.css'
import img1 from './img/HOw it works.png'
import img4 from './img/potential thumbnails 1.png'
import img3 from './img/Group 65.png'
import img2 from './img/Group 65 (1).png'
import Card from './Card'

import Card2 from './card2'


const Section =  () => {
    return(
        <section className='section'>
           <div className='seqtion_name'>
             <img src={img1} className='img_t2w' alt=""  />
           </div>
           <div className='t23'>
           <Card img={img4} big="Prep" text="We deliver various types of  training modules that include in-person facilitation, remote training, and self-paced learning modules."/>
           <Card img={img3} big="Podcast" text="Audio instruction guides you through the content with music prompting for when to facilitate instruction. Teachers also receive a dedicated audio guide to listen to prior to class."/>
           <Card img={img2} big="Play" text="Teachers can easily guide children through our structured skill-based activities. Our trauma-informed play based approach makes learning fun and accessible to all."/>
           </div>
           <div className='section_text'>
            <h1 className='section_h1'>Through a various tools and  methodologies, we aim to create a safe and <br /> <span className='section_span'>engaging learning environment.</span> </h1>
           </div>
           <div className='r64we'>
           <Card2/>
           </div>
        </section>
    )
}
export default Section