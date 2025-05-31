// script.ts
(function() {
    // Create a style element and append it to the head
    const style: HTMLStyleElement = document.createElement('style');
    document.head.appendChild(style);

    // Define CSS for glowing effect and fade animation
    style.textContent = `
        glow-tag {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
        }
        .glow {
            color: transparent; /* Make the text transparent */
            text-shadow: 
                0 0 5px rgba(255, 255, 255, 0.8), /* White glow */
                0 0 10px rgba(255, 255, 255, 0.6), 
                0 0 15px rgba(255, 255, 255, 0.4);
            background: url('./wavri.svg') no-repeat; /* Use external SVG */
            background-size: cover;
            filter: blur(1.5px); /* Slight blur to obscure text */
        }

        .glow::before {
            content: ""; /* Actual text for human readability */
            color: #000; /* Visible text color */
            left: 0;
            top: 0;
            z-index: 1;
            filter: blur(0.5px); /* Additional blur for obscurity */
        }

        .fade-glow {
            color: #1225;
            animation: fade 10s infinite; /* Use fade animation */
        }

        @keyframes fade {
            0%, 100% {
                opacity: 0.5;
            }
            50% {
                opacity: 1;
            }
        }
    `;

    // Define the custom element
    class GlowTag extends HTMLElement {
        constructor() {
            super();
        }
    }

    customElements.define('glow-tag', GlowTag);

    // Select all elements to apply the glow effect
    const elementsToGlow: string[] = [
        'glow-tag p',
        'glow-tag h1',
        'glow-tag h2',
        'glow-tag h3',
        'glow-tag h4',
        'glow-tag h5',
        'glow-tag h6'
    ]; // Add or remove tags as needed

    // Function to add the glow and fade class to selected elements
    function applyGlow(): void {
        elementsToGlow.forEach(tag => {
            document.querySelectorAll(tag).forEach((element: Element) => {
                (element as HTMLElement).classList.add('glow', 'fade-glow'); // Add both classes
            });
        });
    }

    // Apply the glow effect once the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', applyGlow);
})();
