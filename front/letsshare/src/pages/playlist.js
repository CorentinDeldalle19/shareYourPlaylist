import Navbar from '../components/Navbar'
import Head from '../components/Head'
import Line from '../components/Line'
import Card from '../components/Card2'
import '../styles/index.css'

function Playlist(){
    return (
        <div className='index'>
            <div className="left">
                <Navbar />
            </div>
            <div className="right">
                <Head />
                <Line />
            </div>
        </div>
    )
}

export default Playlist;