import Card from "./Card";
import myturn from '../img/design-unique-music-album-cover-art.jpg'; // Import de l'image de l'album
import damn from '../img/damn-cover-kendrick-lamar-album-2.jpg'
import blond from '../img/AlbumCovers_Blonde-1200x1200.jpg'
import kanyewest from '../img/ju_art_record_covers_289_takashi-murakami_kanye-west-1300x1178.jpg'


function World(){
    return(
        <div>
            <h2>The world learn that...</h2>

            <div className="cards">
                <Card
                    image={myturn}
                    title="MY TURN"
                    artist="Lil Baby"
                />
                <Card
                    image={damn}
                    title="DAMN"
                    artist="Kendrick Lamar"
                />
                <Card
                    image={blond}
                    title="BLOND"
                    artist="Franck Ocean"
                />
                <Card
                    image={kanyewest}
                    title="GRADUATION"
                    artist="Kanye West"
                />
            </div>

            <a href="#" className="discover">
                <p>discover more</p>
            </a>
        </div>
    )
}

export default World;