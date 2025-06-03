// musicMixer.jsx
// file to be used on gh-pages in the html:
//     <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
//     <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
//     <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
//     <body>
//     <div id="root"></div>

//     <!-- Load Your JSX Component -->
//     <script type="text/babel" src="./musicMixer.jsx"></script>
// </body>
// Notice type="text/babel"

const MusicMixer = () => {
        const musicList = [ // This is where we will put the list of songs
            // Each song has a source (where to find it) and a title (what it's called)
            {
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880641&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false", // This is the link to the first playlist that will play automatically
                title: "Trending Music - Indie" // This is the name of the first playlist
            },
            {
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880599&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false", // This is the link to the second playlist that will play automatically
                title: "Trending Music - Pop" // This is the name of the second playlist
            },
            {
                src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880578&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false", // This is the link to the third playlist that will play automatically
                title: "Trending Music - R&B" // This is the name of the third playlist
            }
            // You can add more playlists here by following the same format
        ];
    
    const [currentMusic, setCurrentMusic] = React.useState(null);
    const [isMinimized, setIsMinimized] = React.useState(false);

    // Function to get a random number between min and max (inclusive)
    const getRandomNumber = (min, max) => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return Math.floor(array[0] % (max - min + 1)) + min;
    };

    // This function plays a random song from our list.
    const playRandomMusic = () => {
        try {
            // We pick a random song from our music list.
            const randomIndex = getRandomNumber(0, musicList.length - 1);
            const selectedMusic = musicList[randomIndex]; // This is the song we picked.
            const musicSrc = selectedMusic.src; // This is the link to the song.

            // We pick a random number between 1 and 4 to start the song at a random point.
            const randomNumber = getRandomNumber(1, 4);

            // We add the random number to the song's link so it starts at a different place.
            const modifiedSrc = `${musicSrc}&start_track=${randomNumber}`;

            // We save the modified song link in our currentMusic state.
            setCurrentMusic(modifiedSrc);
        } catch (error) {
            // If something goes wrong, we show an error message.
            console.error('Error playing music:', error);
            alert('An error occurred while trying to play music. Please try again later.');
        }
    };

    const toggleMinimize = () => {
        setIsMinimized(prev => !prev);
    };

    const styles = {
        musicMixer: {
            position: 'fixed',
            bottom: 0,
            right: '20px',
            width: '250px',
            maxWidth: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(204, 204, 204, 0.5)',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            transition: 'all 0.7s ease',
            overflow: 'hidden',
            opacity: isMinimized ? 0.2 : 0.9,
            backdropFilter: isMinimized ? 'blur(5px)' : 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
        },
        playButton: {
            flexGrow: 1,
            padding: '10px',
            border: 'none',
            color: 'rgb(245, 0, 18)',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background 0.3s ease',
            fontSize: '15px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            boxShadow: '0 0 10px rgba(245, 0, 18, 0.7)',
        },
        playButtonHover: {
            backgroundColor: 'rgba(255, 85, 0, 0.83)',
            color: 'white',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
        },
        toggleButton: {
            padding: '5px 10px',
            background: 'transparent',
            border: 'none',
            color: '#ff5500',
            cursor: 'pointer',
            fontSize: '20px',
            transition: 'transform 0.2s ease, background 0.3s ease',
        },
        toggleButtonHover: {
            transform: 'scale(1.1)',
            color: 'gold',
        },
        musicContainer: {
            marginTop: '5px',
            display: isMinimized ? 'none' : 'block',
        },
        musicFooter: {
            backgroundColor: 'rgba(255, 85, 0, 0.9)',
            color: '#ff17b4',
            padding: '5px 0',
            textAlign: 'center',
            fontFamily: 'Cursive',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 85, 0, 1)',
            margin: 0,
        },
    };

    return (
        <div id="musicMixer" style={styles.musicMixer}>
            <div id="buttonContainer" style={styles.buttonContainer}>
                <button
                    id="playButton"
                    style={styles.playButton}
                    onClick={playRandomMusic} // Play random music when clicked
                    onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.playButtonHover)} // Change style on hover
                    onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.playButton)} // Change back style when not hovering
                >
                    <img
                        src="https://raw.githubusercontent.com/thaumaturgists/Kewlest/main/feather.png" // Image for the button
                        alt="Kewlest" // Alt text for the image
                        style={{ maxWidth: '15px', height: '15px', marginRight: '5px' }} // Size and spacing for the image
                    />
                    Play Random Music
                </button>
                <button
                    id="toggleButton"
                    style={styles.toggleButton}
                    onClick={toggleMinimize} // Toggle minimize when clicked
                    onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.toggleButtonHover)} // Change style on hover
                    onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.toggleButton)} // Change back style when not hovering
                >
                    {isMinimized ? '+' : '-'} {/* Show '+' if minimized, '-' if not */}
                </button>
            </div>
            <div id="musicContainer" style={styles.musicContainer}>
                {currentMusic && ( // If there is music to play
                    <iframe
                        width="100%" // Make the iframe take full width
                        height="300" // Set height for the music player
                        scrolling="no" // No scrolling for the iframe
                        frameBorder="no" // No border for the iframe
                        allow="autoplay" // Allow autoplay for the music
                        src={currentMusic} // Use the current music source
                    ></iframe>
                )}
            </div>
            <h6 id="music-footer" style={styles.musicFooter}>&#x00A9; Kewlest</h6> {/* Footer with copyright text */}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MusicMixer />);
