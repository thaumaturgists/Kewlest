// musicMixer.jsx
// We are importing React and some special tools from React to help us create our app.
import React, { useState } from 'react';

// This is our MusicMixer component where we mix music!
const MusicMixer = () => {
    // Here we have a list of music playlists with their links and titles
    const musicList = [
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880641&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - Indie" // This is Indie music
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880599&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - Pop" // This is Pop music
        },
        {
            src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880578&auto_play=true&show_artwork=false&show_comments=false&hide_related=true&show_user=true&buying=false&liking=false&show_playcount=false&sharing=false&show_reposts=false&show_teaser=true&visual=false&download=false",
            title: "Trending Music - R&B" // This is R&B music
        }
    ];

    // We use these to keep track of the current music and if the mixer is minimized
    const [currentMusic, setCurrentMusic] = useState(null);
    const [isMinimized, setIsMinimized] = useState(false);

    // This function gives us a random number between min and max
    const getRandomNumber = (min, max) => {
        const array = new Uint32Array(1); // Create an array to hold a random number
        window.crypto.getRandomValues(array); // Fill the array with a random number
        return (array[0] % (max - min + 1)) + min; // Return a number in the range we want
    };

    // This function plays a random music from our list
    const playRandomMusic = () => {
        try {
            const randomIndex = getRandomNumber(0, musicList.length - 1); // Get a random index
            const selectedMusic = musicList[randomIndex]; // Select music using the random index
            const musicSrc = selectedMusic.src; // Get the music source link
            const randomNumber = getRandomNumber(1, 4); // Get a random track number
            const modifiedSrc = `${musicSrc}&start_track=${randomNumber}`; // Modify the link to start at a random track
            setCurrentMusic(modifiedSrc); // Set the current music to play
        } catch (error) {
            console.error('Error playing music:', error); // Log any errors
            alert('An error occurred while trying to play music. Please try again later.'); // Show an alert if there's an error
        }
    };

    // This function toggles (changes) the minimized state of the mixer
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized); // Change the minimized state to the opposite of what it is
    };

    // Here we define the styles for our music mixer
    const styles = {
        musicMixer: {
            position: 'fixed', // Keep the mixer fixed at the bottom right
            bottom: 0,
            right: '20px',
            width: '250px',
            maxWidth: '90%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background
            border: '1px solid rgba(204, 204, 204, 0.5)', // Light border
            borderRadius: '12px', // Rounded corners
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect
            zIndex: 1000, // Make sure it stays on top
            transition: 'all 0.7s ease', // Smooth transition for changes
            overflow: 'hidden', // Hide anything that goes outside the box
            opacity: isMinimized ? 0.2 : 0.9, // Change opacity when minimized
            backdropFilter: isMinimized ? 'blur(5px)' : 'blur(10px)', // Blur effect when minimized
            display: 'flex', // Use flexbox to arrange items
            flexDirection: 'column', // Stack items vertically
        },
        buttonContainer: {
            display: 'flex', // Use flexbox for buttons
            justifyContent: 'space-between', // Space buttons apart
            alignItems: 'center', // Center buttons vertically
            padding: '10px', // Add some space around buttons
        },
        playButton: {
            flexGrow: 1, // Make the play button grow to fill space
            padding: '10px', // Add space inside the button
            border: 'none', // No border for the button
            color: 'rgb(245, 0, 18)', // Red color for the text
            cursor: 'pointer', // Change cursor to pointer when hovering
            borderRadius: '5px', // Rounded corners for the button
            transition: 'background 0.3s ease', // Smooth background change
            fontSize: '15px', // Font size for the button text
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Shadow effect for text
            boxShadow: '0 0 10px rgba(245, 0, 18, 0.7)', // Shadow effect for the button
        },
        playButtonHover: {
            backgroundColor: 'rgba(255, 85, 0, 1)', // Change background color when hovered
            color: 'white', // Change text color to white when hovered
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)', // Change text shadow when hovered
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Change button shadow when hovered
        },
        toggleButton: {
            padding: '5px 10px', // Space inside the toggle button
            background: 'transparent', // No background for the toggle button
            border: 'none', // No border for the toggle button
            color: '#ff5500', // Orange color for the text
            cursor: 'pointer', // Change cursor to pointer when hovering
            fontSize: '20px', // Font size for the toggle button text
            transition: 'transform 0.2s ease, background 0.3s ease', // Smooth changes for hover effects
        },
        toggleButtonHover: {
            transform: 'scale(1.1)', // Make the button a little bigger when hovered
            color: 'gold', // Change text color to gold when hovered
        },
        musicContainer: {
            marginTop: '5px', // Space above the music container
            display: isMinimized ? 'none' : 'block', // Hide music when minimized
        },
        musicFooter: {
            backgroundColor: 'rgba(255, 85, 0, 0.9)', // Background color for the footer
            color: '#ff17b4', // Pink color for the footer text
            padding: '5px 0', // Space above and below the footer text
            textAlign: 'center', // Center the footer text
            fontFamily: 'Cursive', // Use a cursive font for the footer
            fontWeight: 'bold', // Make the footer text bold
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 85, 0, 1)', // Shadow effect for footer text
            margin: 0, // No margin for the footer
        },
    };

    // This is what we show on the screen
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
                    Play Random Music // Text on the button {/* You may delete this showing comment to the left: // Text on the button */}
                </button>
                <button
                    id="toggleButton"
                    style={styles.toggleButton}
                    onClick={toggleMinimize} // Toggle minimize when clicked
                    onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.toggleButtonHover)} // Change style on hover
                    onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.toggleButton)} // Change back style when not hovering
                >
                    {isMinimized ? '+' : '-'} // Show '+' if minimized, '-' if not {/* You may delete this showing comment to the left: // Show '+' if minimized, '-' if not */}
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
            <h6 id="music-footer" style={styles.musicFooter}>&#x00A9; Kewlest</h6> // Footer with copyright text {/* You may delete this showing comment to the left, // Footer with copyright text */}
        </div>
    );
};

// Export the MusicMixer component so we can use it in other parts of the app
export default MusicMixer;
