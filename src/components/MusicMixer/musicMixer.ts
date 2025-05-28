// musicMixer.ts

interface Music {
    src: string;
    title: string;
}

export class MusicMixer {
    private musicList: Music[];
    private currentMusic: string | null;
    private isMinimized: boolean;

    constructor() {
        this.musicList = [
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

        this.currentMusic = null;
        this.isMinimized = false;

        this.init();
    }

    private getRandomNumber(min: number, max: number): number {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return (array[0] % (max - min + 1)) + min;
    }

public playRandomMusic(): void {
    try {
        const randomIndex = this.getRandomNumber(0, this.musicList.length - 1);
        const selectedMusic = this.musicList[randomIndex];
        const musicSrc = selectedMusic.src;
        const randomNumber = this.getRandomNumber(1, 4);
        // Include auto_play parameter
        const modifiedSrc = `${musicSrc}&start_track=${randomNumber}&auto_play=true`;
        this.currentMusic = modifiedSrc;
        this.updateMusicPlayer();
    } catch (error) {
        console.error('Error playing music:', error);
        alert('An error occurred while trying to play music. Please try again later.');
    }
}

    public toggleMinimize(): void {
        this.isMinimized = !this.isMinimized;
        this.updateUI();
    }

    private updateMusicPlayer(): void {
        const musicContainer = document.getElementById('musicContainer') as HTMLElement;
        musicContainer.innerHTML = this.currentMusic ? `<iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="${this.currentMusic}"></iframe>` : '';
    }

    private updateUI(): void {
        const musicMixer = document.getElementById('musicMixer') as HTMLElement;
        musicMixer.style.opacity = this.isMinimized ? '0.2' : '0.9';
        musicMixer.style.backdropFilter = this.isMinimized ? 'blur(5px)' : 'blur(10px)';
        document.getElementById('musicContainer')!.style.display = this.isMinimized ? 'none' : 'block';
    }

    private init(): void {
        const container = document.createElement('div');
        container.id = 'musicMixer';
        container.style.position = 'fixed';
        container.style.bottom = '0';
        container.style.right = '20px';
        container.style.width = '250px';
        container.style.maxWidth = '90%';
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        container.style.border = '1px solid rgba(204, 204, 204, 0.5)';
        container.style.borderRadius = '12px';
        container.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        container.style.zIndex = '1000';
        container.style.transition = 'all 0.7s ease';
        container.style.overflow = 'hidden';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.style.alignItems = 'center';
        buttonContainer.style.padding = '10px';

        const playButton = document.createElement('button');
        playButton.innerHTML = `<img src="https://raw.githubusercontent.com/thaumaturgists/Kewlest/main/feather.png" alt="Kewlest" style="max-width: 15px; height: 15px; margin-right: 5px;" /> Play Random Music`;
        playButton.style.flexGrow = '1';
        playButton.style.padding = '10px';
        playButton.style.border = 'none';
        playButton.style.color = 'rgb(245, 0, 18)';
        playButton.style.cursor = 'pointer';
        playButton.style.borderRadius = '5px';
        playButton.style.transition = 'background 0.3s ease';
        playButton.style.fontSize = '15px';
        playButton.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        playButton.style.boxShadow = '0 0 10px rgba(245, 0, 18, 0.7)';
        playButton.onmouseover = () => {
            playButton.style.backgroundColor = 'rgba(255, 85, 0, 1)';
            playButton.style.color = 'white';
            playButton.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
            playButton.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)';
        };
        playButton.onmouseout = () => {
            playButton.style.backgroundColor = '';
            playButton.style.color = 'rgb(245, 0, 18)';
            playButton.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
            playButton.style.boxShadow = '0 0 10px rgba(245, 0, 18, 0.7)';
        };
        playButton.onclick = () => this.playRandomMusic();

        const toggleButton = document.createElement('button');
        toggleButton.innerHTML = this.isMinimized ? '+' : '-';
        toggleButton.style.padding = '5px 10px';
        toggleButton.style.background = 'transparent';
        toggleButton.style.border = 'none';
        toggleButton.style.color = '#ff5500';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.fontSize = '20px';
        toggleButton.style.transition = 'transform 0.2s ease, background 0.3s ease';
        toggleButton.onmouseover = () => {
            toggleButton.style.transform = 'scale(1.1)';
            toggleButton.style.color = 'gold';
        };
        toggleButton.onmouseout = () => {
            toggleButton.style.transform = '';
            toggleButton.style.color = '#ff5500';
        };
        toggleButton.onclick = () => {
            this.toggleMinimize();
            toggleButton.innerHTML = this.isMinimized ? '+' : '-';
        };

        buttonContainer.appendChild(playButton);
        buttonContainer.appendChild(toggleButton);
        container.appendChild(buttonContainer);

        const musicContainer = document.createElement('div');
        musicContainer.id = 'musicContainer';
        musicContainer.style.marginTop = '5px';
        musicContainer.style.display = this.isMinimized ? 'none' : 'block';
        container.appendChild(musicContainer);

        const musicFooter = document.createElement('h6');
        musicFooter.innerHTML = '&#x00A9; Kewlest';
        musicFooter.style.backgroundColor = 'rgba(255, 85, 0, 0.9)';
        musicFooter.style.color = '#ff17b4';
        musicFooter.style.padding = '5px 0';
        musicFooter.style.textAlign = 'center';
        musicFooter.style.fontFamily = 'Cursive';
        musicFooter.style.fontWeight = 'bold';
        musicFooter.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 85, 0, 1)';
        musicFooter.style.margin = '0';
        container.appendChild(musicFooter);

        document.body.appendChild(container);
    }
}

// Initialize the MusicMixer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new MusicMixer();
});