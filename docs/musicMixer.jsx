const MusicMixer = () => {
    const musicList = [
        { src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880641", title: "Indie" },
        { src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880599", title: "Pop" },
        { src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1734880578", title: "R&B" }
    ];
    
    const [currentMusic, setCurrentMusic] = React.useState(null);
    const [isMinimized, setIsMinimized] = React.useState(false);

    const playRandomMusic = () => {
        const randomIndex = Math.floor(Math.random() * musicList.length);
        setCurrentMusic(musicList[randomIndex].src);
    };

    return (
        <div id="musicMixer">
            <button onClick={playRandomMusic}>Play Random Music</button>
            <button onClick={() => setIsMinimized(!isMinimized)}>
                {isMinimized ? "+" : "-"}
            </button>
            {!isMinimized && currentMusic && (
                <iframe width="100%" height="200" src={currentMusic}></iframe>
            )}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MusicMixer />);