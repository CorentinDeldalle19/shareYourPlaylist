import Navbar from '../components/Navbar'
import Head from '../components/Head';
import Rectangle from '../components/Rectangle';
import World from '../components/World';
import '../styles/index.css'

function Index() {
    return (
        <div className="index">
            <div className="left">
                <Navbar />
            </div>
            <div className="right">
                <Head />
                <Rectangle />
                <World />
            </div>
        </div>
    )
}

export default Index;