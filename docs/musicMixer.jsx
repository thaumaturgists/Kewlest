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

// musicMixer.jsx - This file creates a music mixer application.

const PlayButton = ({ onClick }) => { // This defines a button that plays music when clicked.
    const styles = { // Here we set the styles for the button.
        button: { // This is the normal style for the button.
            flexGrow: 1, // This allows the button to grow and take up space.
            padding: '10px', // This adds space inside the button.
            border: 'none', // This removes the border around the button.
            color: 'rgb(245, 0, 18)', // This sets the text color of the button.
            cursor: 'pointer', // This changes the mouse cursor to a pointer when hovering over the button.
            borderRadius: '5px', // This rounds the corners of the button.
            transition: 'background 0.3s ease', // This makes the background change smoothly.
            fontSize: '15px', // This sets the size of the text on the button.
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // This adds a shadow to the text.
            boxShadow: '0 0 10px rgba(245, 0, 18, 0.7)', // This adds a shadow around the button.
        },
        buttonHover: { // This is the style for when the button is hovered over.
            backgroundColor: 'rgba(255, 85, 0, 0.83)', // This changes the background color when hovered.
            color: 'white', // This changes the text color to white when hovered.
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // This adds a shadow to the text when hovered.
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // This adds a shadow around the button when hovered.
        },
    };

    return ( // This returns the button element.
        <button
            style={styles.button} // This applies the normal button styles.
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)} // This changes the style when the mouse is over the button.
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.button)} // This changes the style back when the mouse leaves the button.
            onClick={onClick} // This calls the onClick function when the button is clicked.
        >
            <img // This adds an image next to the button text.
                src="https://raw.githubusercontent.com/thaumaturgists/Kewlest/main/feather.png" // This is the source of the image.
                alt="Kewlest" // This is the alternative text for the image.
                style={{ maxWidth: '15px', height: '15px', marginRight: '5px' }} // This sets the size of the image and adds space to the right.
            />
            Play Random Music {/*// This is the text that appears on the button.*/}
        </button>
    );
};

const ToggleButton = ({ isMinimized, onToggle }) => { // This defines a button to minimize or maximize the music mixer.
    const styles = { // Here we set the styles for the toggle button.
        button: { // This is the normal style for the toggle button.
            padding: '5px 10px', // This adds space inside the button.
            background: 'transparent', // This makes the background of the button see-through.
            border: 'none', // This removes the border around the button.
            color: '#ff5500', // This sets the text color of the button.
            cursor: 'pointer', // This changes the mouse cursor to a pointer when hovering over the button.
            fontSize: '20px', // This sets the size of the text on the button.
            transition: 'transform 0.2s ease, background 0.3s ease', // This makes the button change smoothly when hovered.
        },
        buttonHover: { // This is the style for when the toggle button is hovered over.
            transform: 'scale(1.1)', // This makes the button slightly bigger when hovered.
            color: 'gold', // This changes the text color to gold when hovered.
        },
    };

    return ( // This returns the toggle button element.
        <button
            style={styles.button} // This applies the normal button styles.
            onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.buttonHover)} // This changes the style when the mouse is over the button.
            onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.button)} // This changes the style back when the mouse leaves the button.
            onClick={onToggle} // This calls the onToggle function when the button is clicked.
        >
            {isMinimized ? '+' : '-'} {/*// This shows a '+' if the mixer is minimized, or a '-' if it's not.*/}
        </button>
    );
};

const MusicMixer = () => { // This defines the main music mixer component.
    const musicList = [ // This is a list of music playlists.
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880641&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false", // This is the link to the first music playlist.
            title: "Trending Music - Indie" // This is the title of the first playlist.
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880599&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false", // This is the link to the second music playlist.
            title: "Trending Music - Pop" // This is the title of the second playlist.
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880578&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false", // This is the link to the third music playlist.
            title: "Trending Music - R&B" // This is the title of the third playlist.
        }
    ];

    const validateMusicList = (list) => { // This function checks if the music list is valid.
        if (!Array.isArray(list)) { // This checks if the list is an array.
            console.error('musicList should be an array'); // This shows an error message if it's not an array.
            return false; // This returns false because the list is invalid.
        }

        return list.every(music => { // This checks every music item in the list.
            const isValidSrc = typeof music.src === 'string' && music.src.trim() !== '' && isValidURL(music.src); // This checks if the source is a valid string and URL.
            const isValidTitle = typeof music.title === 'string' && music.title.trim() !== ''; // This checks if the title is a valid string.
            if (!isValidSrc || !isValidTitle) { // If either the source or title is invalid,
                console.error('Each music item should have a valid string src and title'); // show an error message.
                return false; // Return false because the item is invalid.
            }
            return true; // Return true if the item is valid.
        });
    };

    const isValidURL = (string) => { // This function checks if a string is a valid URL.
        try {
            new URL(string); // This tries to create a new URL object.
            return true; // If successful, return true.
        } catch (_) { // If there's an error,
            return false; // return false because it's not a valid URL.
        }
    };

    if (!validateMusicList(musicList)) { // This checks if the music list is valid.
        return <div>Error: Invalid music list</div>; // If not valid, show an error message.
    }

    const [currentMusic, setCurrentMusic] = React.useState(null); // This creates a state variable for the currently playing music.
    const [isMinimized, setIsMinimized] = React.useState(false); // This creates a state variable to check if the mixer is minimized.

    const getRandomNumber = (min, max) => { // This function generates a random number between min and max.
        const array = new Uint32Array(1); // This creates an array to hold the random number.
        window.crypto.getRandomValues(array); // This fills the array with a random value.
        return Math.floor(array[0] % (max - min + 1)) + min; // This calculates and returns a random number within the specified range.
    };

    const playRandomMusic = () => { // This function plays a random music track.
        try {
            const randomIndex = getRandomNumber(0, musicList.length - 1); // This gets a random index from the music list.
            const selectedMusic = musicList[randomIndex]; // This selects a music item from the list using the random index.
            const musicSrc = selectedMusic.src; // This gets the source URL of the selected music.
            const randomNumber = getRandomNumber(1, 4); // This gets a random number to start the track from.
            const modifiedSrc = `${musicSrc}&start_track=${randomNumber}`; // This modifies the source URL to start from a random track.
            setCurrentMusic(modifiedSrc); // This sets the current music to the modified source.
        } catch (error) { // If there's an error while playing music,
            console.error('Error playing music:', error); // log the error message.
            alert('An error occurred while trying to play music. Please try again later.'); // Show an alert to the user.
        }
    };

    const toggleMinimize = () => { // This function toggles the minimized state of the music mixer.
        setIsMinimized(prev => !prev); // This changes the minimized state to the opposite of what it was.
    };

    const styles = { // Here we set the styles for the music mixer.
        musicMixer: { // This is the style for the main music mixer container.
            position: 'fixed', // This keeps the mixer fixed in place on the screen.
            bottom: 0, // This positions it at the bottom of the screen.
            right: '20px', // This positions it 20 pixels from the right edge.
            width: '250px', // This sets the width of the mixer.
            maxWidth: '90%', // This sets the maximum width to 90% of the screen.
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // This sets a light background color with some transparency.
            border: '1px solid rgba(204, 204, 204, 0.5)', // This adds a light border around the mixer.
            borderRadius: '12px', // This rounds the corners of the mixer.
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // This adds a shadow effect to the mixer.
            zIndex: 1000, // This makes sure the mixer is on top of other elements.
            transition: 'all 0.7s ease', // This makes the mixer change smoothly when minimized or maximized.
            overflow: 'hidden', // This hides any content that goes outside the mixer.
            opacity: isMinimized ? 0.2 : 0.9, // This changes the opacity based on whether the mixer is minimized.
            backdropFilter: isMinimized ? 'blur(5px)' : 'blur(10px)', // This adds a blur effect to the background when minimized.
            display: 'flex', // This makes the mixer a flex container to arrange its children.
            flexDirection: 'column', // This arranges the children in a column.
        },
        buttonContainer: { // This is the style for the container holding the buttons.
            display: 'flex', // This makes it a flex container.
            justifyContent: 'space-between', // This spaces the buttons evenly.
            alignItems: 'center', // This centers the buttons vertically.
            padding: '10px', // This adds space inside the container.
        },
        musicContainer: { // This is the style for the music display area.
            marginTop: '5px', // This adds space above the music display.
            display: isMinimized ? 'none' : 'block', // This hides the music display if minimized.
        },
        musicFooter: { // This is the style for the footer of the music mixer.
            backgroundColor: 'rgba(255, 85, 0, 0.9)', // This sets a colorful background for the footer.
            color: '#ff17b4', // This sets the text color in the footer.
            padding: '5px 0', // This adds space above and below the footer text.
            textAlign: 'center', // This centers the text in the footer.
            fontFamily: 'Cursive', // This sets a cursive font for the footer text.
            fontWeight: 'bold', // This makes the footer text bold.
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 85, 0, 1)', // This adds a glowing effect to the footer text.
            margin: 0, // This removes any margin around the footer.
        },
    };

    return ( // This returns the main structure of the music mixer.
        <div id="musicMixer" style={styles.musicMixer}> {/*// This is the main container for the music mixer.*/}
            <div id="buttonContainer" style={styles.buttonContainer}> {/*// This is the container for the play and toggle buttons.*/}
                <PlayButton onClick={playRandomMusic} /> {/*// This adds the play button and connects it to the play function.*/}
                <ToggleButton isMinimized={isMinimized} onToggle={toggleMinimize} /> {/*// This adds the toggle button and connects it to the toggle function.*/}
            </div>
            <div id="musicContainer" style={styles.musicContainer}> {/*// This is the container for the music player.*/}
                {currentMusic && ( // This checks if there is currently music to play.
                    <iframe // This creates an iframe to play the music.
                        width="100%" // This sets the width of the iframe to 100% of its container.
                        height="300" // This sets the height of the iframe.
                        scrolling="no" // This disables scrolling in the iframe.
                        frameBorder="no" // This removes the border around the iframe.
                        allow="autoplay" // This allows the music to play automatically.
                        src={currentMusic} // This sets the source of the iframe to the current music.
                        sandbox="allow-same-origin allow-scripts allow-popups" // This adds security restrictions to the iframe.
                    ></iframe>
                )}
            </div>
            <h6 id="music-footer" style={styles.musicFooter}><MusicFooter /></h6> {/*// This adds a footer with a copyright notice. I made, and added an import for music footer <3*/}
        </div>
    );
};

// This line renders the MusicMixer component into the HTML element with the id "root".
ReactDOM.createRoot(document.getElementById("root")).render(<MusicMixer />);
