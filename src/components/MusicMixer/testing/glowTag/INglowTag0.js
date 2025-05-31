// glowTag0.js
(function() {
const __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Create a style element and append it to the head
const style = document.createElement('style');
document.head.appendChild(style);

// Define CSS for glowing effect and fade animation
style.textContent = `
    glow-tag0 {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
    .glow0 {
        color: transparent; /* Make the text transparent */
        text-shadow: 
            0 0 5px rgba(255, 255, 255, 0.8), /* White glow */
            0 0 10px rgba(255, 255, 255, 0.6), 
            0 0 15px rgba(255, 255, 255, 0.4);
       /* background: url('https://raw.githubusercontent.com/thaumaturgists/SDCM/refs/heads/main/images/svg/wavr%C3%AD.svg') no-repeat; Use external SVG */
        background-size: cover;
        filter: blur(1.5px); /* Slight blur to obscure text */
    }

    .glow0::before {
        content: ""; /* Actual text for human readability */
        color: #000; /* Visible text color */
        left: 0;
        top: 0;
        z-index: 1;
        filter: blur(0.5px); /* Additional blur for obscurity */
    }

    .fade-glow0 {
        color: #000313;
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
const GlowTag = /** @class */ (function (_super) {
    // Extend the HTMLElement class
    __extends(GlowTag, _super);
    
    // Constructor for the GlowTag class
    function GlowTag() {
        // Call the parent constructor using 'super()'
        const instance = _super.call(this) || this; // This line is not necessary in modern JavaScript/TypeScript
        // You can add any additional initialization here if needed
        return instance;
    }

    // Optionally, you can add methods or properties here
    return GlowTag;
}(HTMLElement));

// Define the custom element with the correct name
customElements.define('glow-tag0', GlowTag);

// Select all elements to apply the glow effect
const elementsToGlow = [
    'glow-tag0 p',
    'glow-tag0 h1',
    'glow-tag0 h2',
    'glow-tag0 h3',
    'glow-tag0 h4',
    'glow-tag0 h5',
    'glow-tag0 h6'
]; // Add or remove tags as needed

// Function to add the glow and fade class to selected elements
function applyGlow() {
    elementsToGlow.forEach(function (tag) {
        document.querySelectorAll(tag).forEach(function (element) {
            // Ensure the element is valid before adding classes
            if (element instanceof HTMLElement) {
                element.classList.add('glow0', 'fade-glow0'); // Add both classes
            }
        });
    });
}

// Apply the glow effect once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applyGlow);
})();
