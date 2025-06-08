// const MusicFooter = () => {
//     const [scriptLoaded, setScriptLoaded] = React.useState(false);

//     const loadGlowScript = () => {
//         if (!scriptLoaded) {
//             const existingScript = document.getElementById('dynamicScript');
//             if (!existingScript) {
//                 const script = document.createElement('script');
//                 script.id = 'dynamicScript';
//                 script.src = 'glow-tag-.js';
//                 script.defer = true;
//                 document.body.appendChild(script);
//                 setScriptLoaded(true);
//             }
//         }
//     };

//     const styles = {
//         buttonGlow: {
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s ease',
//         },
//         buttonGlowHover: {
//             backgroundColor: '#0056b3',
//         },
//         buttonGlowActive: {
//             backgroundColor: '#004494',
//         },
//     };

//     return (
//         <h6 style={{ textAlign: 'center', margin: 0 }}>
//             <button
//                 type="button"
//                 style={styles.buttonGlow}
//                 onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.buttonGlowHover)}
//                 onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.buttonGlow)}
//                 onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonGlowActive)}
//                 onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonGlowHover)}
//                 onClick={loadGlowScript}
//             >
//                 Load Glow Script
//             </button>
//             <MusicFooter />
//         </h6>
//     );
// };

// export default MusicFooter;
const { useState } = React;

const MusicFooter = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true); // State to control button visibility

    const loadGlowScript = () => {
        if (!scriptLoaded) {
            const existingScript = document.getElementById('dynamicScript');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'dynamicScript';
                script.src = 'glow-tag-.js'; // Ensure this path is correct
                script.defer = true;
                document.body.appendChild(script);
                setScriptLoaded(true);
            }
        }
        setButtonVisible(false); // Hide the button after it is clicked
    };

    const styles = {
        buttonGlow: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            padding: '5px 15px', // Increased padding for a larger button
            fontSize: '15px', // Increased font size
            borderRadius: '8px', // Optional: increase border radius
            marginRight: '7px', // Space between button and text
        },
        buttonGlowHover: {
            backgroundColor: '#0056b3',
        },
        buttonGlowActive: {
            backgroundColor: '#004494',
        },
        musicFooter: {
            textAlign: 'center',
            margin: 0,
            display: 'flex', // Use flexbox for alignment
            alignItems: 'center', // Center items vertically
            justifyContent: 'center', // Center items horizontally
        },
    };

    return (
        <h6 id="music-footer" style={styles.musicFooter}>
            {buttonVisible && ( // Render button only if buttonVisible is true
                <button
                    type="button"
                    style={styles.buttonGlow}
                    onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.buttonGlowHover)}
                    onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.buttonGlow)}
                    onMouseDown={(e) => Object.assign(e.currentTarget.style, styles.buttonGlowActive)}
                    onMouseUp={(e) => Object.assign(e.currentTarget.style, styles.buttonGlowHover)}
                    onClick={loadGlowScript}
                >
                    Load Glow Script
                </button>
            )}
            &#x00A9; Kewlest
        </h6>
    );
};

// Render the MusicFooter component
ReactDOM.render(<MusicFooter />, document.getElementById('root'));


