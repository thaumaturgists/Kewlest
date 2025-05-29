// We are importing React and some special tools from React to help us create our app.
import React, { useState, CSSProperties } from 'react';

// This is a blueprint for our music. It tells us that each music has a source (where to find it) and a title (what it's called).
interface Music {
    src: string; // The place where the music is located
    title: string; // The name of the music
}

// This is our main component called MusicMixer. It's like a special box that holds everything we need for our music player.
const MusicMixer: React.FC = () => {
    // Here we create a list of music. Each music has a source and a title.
    const musicList: Music[] = [
        {
            // This is the first music in our list. It has a source and a title.
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880641&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - Indie" // The name of the music
        },
        {
            // This is the second music in our list.
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880599&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - Pop" // The name of the music
        },
        {
            // This is the third music in our list.
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880578&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - R&B" // The name of the music
        }
    ];

    // We are using a special tool called useState to keep track of which music is currently playing and if the player is minimized.
    const [currentMusic, setCurrentMusic] = useState<string | null>(null); // This will hold the current music's source
    const [isMinimized, setIsMinimized] = useState<boolean>(false); // This will tell us if the player is minimized or not

    // This function helps us get a random number between a minimum and maximum number.
    const getRandomNumber = (min: number, max: number): number => {
        const array = new Uint32Array(1); // We create an array to hold our random number
        window.crypto.getRandomValues(array); // We fill the array with a random number
        return (array[0] % (max - min + 1)) + min; // We make sure the number is between min and max
    };

    // This function plays a random music from our list.
    const playRandomMusic = () => {
        try {
            const randomIndex = getRandomNumber(0, musicList.length - 1); // Get a random index to pick a music
            const selectedMusic = musicList[randomIndex]; // Select the music from the list
            const musicSrc = selectedMusic.src; // Get the source of the selected music
            const randomNumber = getRandomNumber(1, 4); // Get a random number to start the music at a random track
            const modifiedSrc = `${musicSrc}&start_track=${randomNumber}`; // Modify the source to start at the random track
            setCurrentMusic(modifiedSrc); // Set the current music to the modified source
        } catch (error) {
            console.error('Error playing music:', error); // If something goes wrong, we log the error
            alert('An error occurred while trying to play music. Please try again later.'); // Show an alert to the user
        }
    };

    // This function changes whether the music player is minimized or not.
    const toggleMinimize = () => {
        setIsMinimized(prev => !prev); // Flip the minimized state
    };

    // Here we define how our music mixer looks using styles.
    const musicMixer: CSSProperties = {
        position: 'fixed', // We want it to stay in one place
        bottom: 0, // We want it to be at the bottom of the screen
        right: '20px', // We want it to be 20 pixels from the right side of the screen
        width: '250px', // The width of the music mixer
        maxWidth: '90%', // It shouldn't be wider than 90% of the screen
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // The background color is white with a little transparency
        border: '1px solid rgba(204, 204, 204, 0.5)', // A light gray border around the mixer
        borderRadius: '12px', // The corners of the mixer are rounded
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // A shadow effect to make it look like it's floating
        zIndex: 1000, // This makes sure it appears on top of other things
        transition: 'all 0.7s ease', // Smooth transition for changes
        overflow: 'hidden', // Hide anything that goes outside the box
        opacity: isMinimized ? 0.2 : 0.9, // If minimized, make it less visible
        backdropFilter: isMinimized ? 'blur(5px)' : 'blur(10px)', // Blur the background when minimized
        display: 'flex', // We want to arrange items inside the mixer in a flexible way
        flexDirection: 'column', // Arrange items in a column
    };

    // This style is for the container that holds the buttons.
    const buttonContainer: CSSProperties = {
        display: 'flex', // Arrange buttons in a flexible way
        justifyContent: 'space-between', // Space them out evenly
        alignItems: 'center', // Center them vertically
        padding: '10px', // Add some space inside the container
    };

    // This style is for the play button.
    const playButton: CSSProperties = {
        flexGrow: 1, // Make the button grow to fill space
        padding: '10px', // Add some space inside the button
        border: 'none', // No border around the button
        color: 'rgb(245, 0, 18)', // The text color is a bright red
        cursor: 'pointer', // Change the cursor to a pointer when hovering
        borderRadius: '5px', // Round the corners of the button
        transition: 'background 0.3s ease', // Smooth transition for background color changes
        fontSize: '15px', // The size of the text
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // A shadow effect for the text
        boxShadow: '0 0 10px rgba(245, 0, 18, 0.7)', // A shadow effect around the button
    };

    // This style is for the play button when the mouse hovers over it.
    const playButtonHover: CSSProperties = {
        backgroundColor: 'rgba(255, 85, 0, 1)', // Change the background color to a bright orange
        color: 'white', // Change the text color to white
        textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // Add a glow effect to the text
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Add a glow effect around the button
    };

    // This style is for the toggle button that minimizes the player.
    const toggleButton: CSSProperties = {
        padding: '5px 10px', // Add some space inside the button
        background: 'transparent', // Make the background see-through
        border: 'none', // No border around the button
        color: '#ff5500', // The text color is a bright orange
        cursor: 'pointer', // Change the cursor to a pointer when hovering
        fontSize: '20px', // The size of the text
        transition: 'transform 0.2s ease, background 0.3s ease', // Smooth transition for changes
    };

    // This style is for the toggle button when the mouse hovers over it.
    const toggleButtonHover: CSSProperties = {
        transform: 'scale(1.1)', // Make the button a little bigger when hovered
        color: 'gold', // Change the text color to gold
    };

    // This style is for the container that holds the music player.
    const musicContainer: CSSProperties = {
        marginTop: '5px', // Add some space above the music player
        display: isMinimized ? 'none' : 'block', // If minimized, hide the music player; otherwise, show it
    };

    // This style is for the footer of the music mixer.
    const musicFooter: CSSProperties = {
        backgroundColor: 'rgba(255, 85, 0, 0.9)', // The background color is a bright orange with some transparency
        color: '#ff17b4', // The text color is a bright pink
        padding: '5px 0', // Add some space above and below the text
        textAlign: 'center', // Center the text
        fontFamily: 'Cursive', // Use a cursive font for a fancy look
        fontWeight: 'bold', // Make the text bold
        textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 85, 0, 1)', // Add a glow effect to the text
        margin: 0, // Remove any default margin
    };

    // This is what we show on the screen when the MusicMixer component is used.
    return (
        <div id="musicMixer" style={musicMixer}> {/* This is the main container for our music mixer */}
            <div id="buttonContainer" style={buttonContainer}> {/* This holds our buttons */}
                <button
                    id="playButton" // This is the play button
                    style={playButton} // Apply the play button styles
                    onClick={playRandomMusic} // When clicked, play random music
                    onMouseOver={(e) => Object.assign(e.currentTarget.style, playButtonHover)} // Change style on hover
                    onMouseOut={(e) => Object.assign(e.currentTarget.style, playButton)} // Change back style when not hovering
                >
                    <img
                        src="https://raw.githubusercontent.com/thaumaturgists/Kewlest/main/feather.png" // This is an image for the button
                        alt="Kewlest" // This is the text that shows if the image can't load
                        style={{ maxWidth: '15px', height: '15px', marginRight: '5px' }} // Style the image size and spacing
                    />
                    Play Random Music {/* This is the text on the button */}
                </button>
                <button
                    id="toggleButton" // This is the toggle button
                    style={toggleButton} // Apply the toggle button styles
                    onClick={toggleMinimize} // When clicked, minimize or restore the player
                    onMouseOver={(e) => Object.assign(e.currentTarget.style, toggleButtonHover)} // Change style on hover
                    onMouseOut={(e) => Object.assign(e.currentTarget.style, toggleButton)} // Change back style when not hovering
                >
                    {isMinimized ? '+' : '-'} {/* Show '+' if minimized, otherwise show '-' */}
                </button>
            </div>
            <div id="musicContainer" style={musicContainer}> {/* This holds the music player */}
                {currentMusic && ( // If there is music to play
                    <iframe
                        width="100%" // Make the iframe take the full width
                        height="300" // Set the height of the music player
                        scrolling="no" // No scrolling allowed
                        frameBorder="no" // No border around the iframe
                        allow="autoplay" // Allow the music to play automatically
                        src={currentMusic} // Set the source of the music player
                    ></iframe>
                )}
            </div>
            <h6 id="music-footer" style={musicFooter}>&#x00A9; Kewlest</h6> {/* This is the footer with copyright text */}
        </div>
    );
};

// Finally, we export the MusicMixer so we can use it in other parts of our app.
export default MusicMixer;
