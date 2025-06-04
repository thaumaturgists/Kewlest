    // index.html
        // file to be used on gh-pages in the html:
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Music Mixer</title>
        
    //     <!-- Load React, ReactDOM & Babel -->
    //     <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    //     <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    //     <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
    // </head>
    // <body>
    //     <div id="root"></div>

    //     <!-- Load Your JSX Component -->
    //     <script type="text/babel" src="./musicMixer.jsx"></script>
    // </body>
    // </html>

// musicMixer.jsx
const PlayButton = ({ onClick }) => {
    const styles = {
        button: {
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
        buttonHover: {
            backgroundColor: 'rgba(255, 85, 0, 0.83)',
            color: 'white',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
        },
    };

    return (
        <button
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.button)}
            onClick={onClick}
        >
            <img
                src="https://raw.githubusercontent.com/thaumaturgists/Kewlest/main/feather.png"
                alt="Kewlest"
                style={{ maxWidth: '15px', height: '15px', marginRight: '5px' }}
            />
            Play Random Music
        </button>
    );
};

const ToggleButton = ({ isMinimized, onToggle }) => {
    const styles = {
        button: {
            padding: '5px 10px',
            background: 'transparent',
            border: 'none',
            color: '#ff5500',
            cursor: 'pointer',
            fontSize: '20px',
            transition: 'transform 0.2s ease, background 0.3s ease',
        },
        buttonHover: {
            transform: 'scale(1.1)',
            color: 'gold',
        },
    };

    return (
        <button
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.button)}
            onClick={onToggle}
        >
            {isMinimized ? '+' : '-'}
        </button>
    );
};

const MusicMixer = () => {
    const musicList = [
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880641&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - Indie"
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880599&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - Pop"
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880578&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - R&B"
        }
    ];

    const validateMusicList = (list) => {
        if (!Array.isArray(list)) {
            console.error('musicList should be an array');
            return false;
        }

        return list.every(music => {
            const isValidSrc = typeof music.src === 'string' && music.src.trim() !== '' && isValidURL(music.src);
            const isValidTitle = typeof music.title === 'string' && music.title.trim() !== '';
            if (!isValidSrc || !isValidTitle) {
                console.error('Each music item should have a valid string src and title');
                return false;
            }
            return true;
        });
    };

    const isValidURL = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;  
        }
    };

    if (!validateMusicList(musicList)) {
        return <div>Error: Invalid music list</div>;
    }

    const [currentMusic, setCurrentMusic] = React.useState(null);
    const [isMinimized, setIsMinimized] = React.useState(false);

    const getRandomNumber = (min, max) => {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return Math.floor(array[0] % (max - min + 1)) + min;
    };

    const playRandomMusic = () => {
        try {
            const randomIndex = getRandomNumber(0, musicList.length - 1);
            const selectedMusic = musicList[randomIndex];
            const musicSrc = selectedMusic.src;
            const randomNumber = getRandomNumber(1, 4);
            const modifiedSrc = `${musicSrc}&start_track=${randomNumber}`;
            setCurrentMusic(modifiedSrc);
        } catch (error) {
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
                <PlayButton onClick={playRandomMusic} />
                <ToggleButton isMinimized={isMinimized} onToggle={toggleMinimize} />
            </div>
            <div id="musicContainer" style={styles.musicContainer}>
                {currentMusic && (
                    <iframe
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={currentMusic}
                        sandbox="allow-same-origin allow-scripts allow-popups"
                    ></iframe>
                )}
            </div>
            <h6 id="music-footer" style={styles.musicFooter}>&#x00A9; Kewlest</h6>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MusicMixer />);
