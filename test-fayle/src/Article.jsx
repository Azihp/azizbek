import './Article.css'
import Mrbest from './Mrbest'

function Article() {
    return(
        <article>
            <div className='article_name'>
                <h1 className='article_h1'>Colors of Kindness is adaptable in nature, and has been localized for varying <br /> <span className='article_span'>contexts. The various adaptation include:</span> </h1>
            </div>
            <div className="article_boom">
                <Mrbest h1="10" p="week" do="Available in"uuo="English" bg="Bangla"/>
            </div>
        </article>
    )
}
export default Article