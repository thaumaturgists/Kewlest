function createGlowTagStyles(): void {
    const styles = `
        glow-tag {
            display: inline-block;
            margin: 0;
            position: relative;
            color: rgba(0, 0, 0, 0.42);
            text-shadow: 
                0 0 5px rgba(255, 255, 255, 0.8),
                0 0 10px rgba(255, 255, 255, 0.6),
                0 0 15px rgba(255, 255, 255, 0.4);
            animation: fade 10s infinite;
            transition: text-shadow 0.5s ease-in-out;
        }
        glow-tag h1, glow-tag h2, glow-tag h3, glow-tag p {
            color: inherit;
            margin: 0;
            padding: 0;
            position: relative;
            z-index: 1;
        }
        .highlight {
            font-weight: bold;
            padding: 0 2px;
            border-radius: 3px;
        }
        @keyframes fade {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

// Call the function to create and append the styles
createGlowTagStyles();

// Section 2: GlowTag Class Definition
class GlowTag extends HTMLElement {
    private colorCode: string;

    constructor() {
        super();
        this.colorCode = this.getRandomColor();
        this.style.color = this.colorCode;
        this.style.textShadow = this.getGlowEffect(this.colorCode);
    }

    connectedCallback(): void {
        this.style.transition = 'text-shadow 0.3s ease';
        this.addEventListener('mouseover', this.onMouseOver.bind(this));
        this.addEventListener('mouseout', this.onMouseOut.bind(this));
    }

    private getRandomColor(): string {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        const randomColor = array[0] % 16777215; // Limit to 0xFFFFFF
        return `#${randomColor.toString(16).padStart(6, '0')}`;
    }

    private getGlowEffect(color: string, intensity: number = 15): string {
        return `
            0 0 5px ${color},
            0 0 ${intensity}px ${color},
            0 0 ${intensity + 5}px ${color}`;
    }

    private onMouseOver(): void {
        this.style.textShadow = this.getGlowEffect(this.colorCode, 20); // Increase glow on hover
    }

    private onMouseOut(): void {
        this.style.textShadow = this.getGlowEffect(this.colorCode); // Reset glow
    }
}

// Define the custom element
customElements.define('glow-tag', GlowTag);

// Section 3: Color Lightening Function
function lightenColor(color: string, percent: number): string {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    
    const R = Math.min((num >> 16) + amt, 255);
    const G = Math.min((num >> 8 & 0x00FF) + amt, 255);
    const B = Math.min((num & 0x0000FF) + amt, 255);
    
    return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1).padStart(6, '0')}`;
}

// Section 4: Highlighting Random Words
function highlightRandomWords(element: HTMLElement): void {
    const words = element.innerText.split(' ');
    const highlightCount = Math.floor(words.length / 1.3);
    let currentHighlight = 0;
    const highlightDelay = 5875;

    const highlightNextWord = () => {
        if (currentHighlight < highlightCount) {
            const { startIndex, numWordsToHighlight } = getRandomHighlightParameters(words.length);
            highlightWords(words, startIndex, numWordsToHighlight);
        }

        element.innerHTML = words.join(' ');
        currentHighlight++;
        setTimeout(highlightNextWord, highlightDelay);
    };

    highlightNextWord();
}

function getRandomHighlightParameters(totalWords: number): { startIndex: number; numWordsToHighlight: number } {
    const numWordsToHighlight = window.crypto.getRandomValues(new Uint32Array(1))[0] % 5 + 1; // Generates a number between 1 and 5
    const startIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % (totalWords - numWordsToHighlight); // Generates a number between 0 and (totalWords - numWordsToHighlight)
    return { startIndex, numWordsToHighlight };
}

function highlightWords(words: string[], startIndex: number, numWordsToHighlight: number): void {
    for (let j = 0; j < numWordsToHighlight; j++) {
        const wordIndex = startIndex + j;
        if (wordIndex < words.length && !words[wordIndex].includes('<span')) {
            words[wordIndex] = createHighlightedWord(words[wordIndex]);
        }
    }
}

function createHighlightedWord(word: string): string {
    const baseColor = getRandomColor();
    const halfIndex = Math.ceil(word.length / 3);
    let highlightedWord = '';

    for (let k = 0; k < word.length; k++) {
        const color = k < halfIndex ? baseColor : lightenColor(baseColor, (k - halfIndex + 1) * 10);
        highlightedWord += `<span class="highlight" style="color: ${color};">${word[k]}</span>`;
    }

    return highlightedWord;
}

// Section 5: Wrapping Elements with GlowTag
function wrapWithGlowTag(selector: string): void {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach(element => {
        if (element.childNodes.length > 0) { // Ensure the element has child nodes
            const glowTag = document.createElement('glow-tag') as GlowTag;
            glowTag.innerHTML = element.innerHTML;
            element.innerHTML = ''; // Clear the original content
            element.appendChild(glowTag);
            highlightRandomWords(glowTag);
        }
    });
}

// Section 6: Random Color Generation
function getRandomColor(): string {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const randomColor = array[0] % 16777215; // Limit to 0xFFFFFF
    return `#${randomColor.toString(16).padStart(6, '0')}`;
}

// Call to wrap specific elements
wrapWithGlowTag('li, ol, ul, h1, h2, h3, h4, h5, h6, p'); // Wrap all h1, h2, h3, and p elements

// Function to wrap a random element with GlowTag
function wrapRandomElementWithGlowTag(): void {
    const elements = Array.from(document.body.children) as HTMLElement[]; // Get all child elements of the body
    if (elements.length === 0) {
        console.log("No elements found to wrap.");
        return; // Exit if there are no elements
    }

    // Generate a cryptographically secure random index
    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    const randomIndex = randomValues[0] % elements.length; // Ensure the index is within bounds

    const selectedElement = elements[randomIndex];
    console.log(`Selected random element: ${selectedElement.tagName}`);

    // Create a glow-tag and set its inner HTML to the selected element's inner HTML
    const glowTag = document.createElement('glow-tag') as GlowTag;
    glowTag.innerHTML = selectedElement.innerHTML;

    // Add custom styles to the glow-tag
    Object.assign(glowTag.style, {
        border: '2px solid #245313', // Example border
        padding: '10px', // Example padding
        borderRadius: '5px', // Example border radius
        backgroundColor: 'transparent', // Example background color
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' // Example glow effect
    });

    // Replace the selected element with the glow-tag
    selectedElement.innerHTML = ''; // Clear the original content
    selectedElement.appendChild(glowTag);
    console.log(`Replaced element with glow-tag: ${selectedElement.tagName}`);
}

// Call the new function to wrap a random element
wrapRandomElementWithGlowTag();
console.log("Wrapped a random element with glow-tag.");

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return Math.floor(array[0] / (0xFFFFFFFF + 1) * (max - min + 1)) + min;
}

// Function to randomly blur the screen
function randomBlur(): void {
    const blurAmount = getRandomInt(0, 4); // Random blur amount between 0 and 4 pixels
    const duration = getRandomInt(5000, 7000); // Random duration between 5 and 7 seconds

    document.body.style.filter = `blur(${blurAmount}px)`; // Apply the blur effect

    // Reset the blur after the duration
    setTimeout(() => {
        document.body.style.filter = 'blur(0px)'; // Remove the blur effect
    }, duration);
}

// Call the randomBlur function every 5 seconds
setInterval(randomBlur, 5555); // Adjusted to a more reasonable interval

// Function to create and apply additional styles dynamically
function createAdditionalStyles(): void {
    const styles = `
        .wrap-glow {
            position: relative; /* Positioning for glow effect */
            display: inline-block; /* Inline block for wrapping elements */
        }

        .wrap-glow::after {
            content: ''; /* Empty content for pseudo-element */
            position: absolute; /* Absolute positioning */
            top: 0; left: 0; right: 0; bottom: 0; /* Cover the entire element */
            background: rgba(255, 255, 255, 0.5); /* Light glow effect */
            filter: blur(10px); /* Blur for the glow */
            opacity: 0; /* Start invisible */
            transition: opacity 0.5s ease; /* Smooth transition for glow */
        }

        .wrap-glow:hover::after {
            opacity: 1; /* Show glow on hover */
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

// Call the function to create additional styles
createAdditionalStyles();
