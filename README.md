# Kewlest

<img src="feather.png" alt="Kewlest Logo" width="200"/>

Kewlest is a music player designed to facilitate the spontaneous enjoyment of music from around the world. Currently, it integrates with SoundCloud APIs through iframes, allowing users to explore a diverse range of music. The project aims to empower users to create their own music websites using a variety of technologies, including JavaScript, React, and TypeScript.

## Features

- **Spontaneous Music Playback**: Experience a wide array of music from different cultures and genres.
- **Customizable Components**: Utilize the provided components to build your own music player or website.
- **Documentation and Guides**: Access resources to help you integrate and customize the music player for your needs.

## Project Structure

```
Kewlest/
│
├── docs/                # Documentation files
├── public/              # Public assets
├── src/                 # Source code
│   ├── components/      # Reusable components
│   │   └── musicMixer/  # Music mixer component
│   │       ├── HTML/    # HTML implementation
│   │       ├── REACT/   # React implementation
│   │       ├── and more...
│   │       └── testing/  # Testing files
│   │
│   ├── data/            # Data files
│   └── app.tsx          # Main application file
│
├── .gitignore           # Git ignore file
├── feather.png          # Project logo
├── LICENSE              # License information
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

To get started with Kewlest, clone the repository and install the necessary dependencies:
> I've commented out JSON in the project as it is set up for gh-pages, and there are some dependency issues with React.
```bash
git clone https://github.com/thaumaturgists/Kewlest.git
cd Kewlest
npm install
```
### Getting React Started Simply

To get started using react you can follow the guides in the folders [MM-jsx.md](https://github.com/thaumaturgists/Kewlest/blob/main/src/components/MusicMixer/React/JSX/MM-jsx.md), or [MM-tsx.md](https://github.com/thaumaturgists/Kewlest/blob/main/src/components/MusicMixer/React/TSX/MM-tsx.md). And make sure your JSON files are LTS (latest stable release), or whatever version best fits you.
```
Kewlest/
│
├── docs/                # Documentation files
├── public/              # Public assets
├── src/                 # Source code
│   ├── components/      # Reusable components
│   │   └── musicMixer/  # Music mixer component
│   │       ├── HTML/    # HTML implementation
│   │       ├── REACT/   # React implementation
```

### Running the Project
> IN THE PROCESS OF DEVELOPING THIS

> Deploying REACT on gh-pages I would use yml and Ci pipeline, currently there are some major security issues I found when testing. But have no worries as this matters not to my project.
```bah
npm audit
# npm audit report

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix --force`
Will install react-scripts@3.0.1, which is a breaking change
node_modules/svgo/node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/svgo/node_modules/css-select
    svgo  1.0.0 - 1.3.2
    Depends on vulnerable versions of css-select
    node_modules/svgo
      @svgr/plugin-svgo  <=5.5.0
      Depends on vulnerable versions of svgo
      node_modules/@svgr/plugin-svgo
        @svgr/webpack  4.0.0 - 5.5.0
        Depends on vulnerable versions of @svgr/plugin-svgo
        node_modules/@svgr/webpack
          react-scripts  >=2.1.4
          Depends on vulnerable versions of @svgr/webpack
          Depends on vulnerable versions of resolve-url-loader
          node_modules/react-scripts

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix --force`
Will install react-scripts@3.0.1, which is a breaking change
node_modules/resolve-url-loader/node_modules/postcss
  resolve-url-loader  0.0.1-experiment-postcss || 3.0.0-alpha.1 - 4.0.0
  Depends on vulnerable versions of postcss
  node_modules/resolve-url-loader
```
# Another Great Start

If you wish to build a full on app another great start is following the guide on developing [Electron](https://www.electronjs.org/docs/latest/development/build-instructions-gn), and if you wish me to help with that feel free to ask through GitHub, and I will get to you as soon as I can!

After the project is built in Electron locally, use the following command:

```bash
npm start
```

This will start the development server and open the application in electron.

## Showcase

Visit the [Kewlest website](https://thaumaturgists.github.io/Kewlest/) to see a live demonstration of the music player. I hope you enjoy it as much as I loved creating it!

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Thank you to all the contributors and the community for your support. Let's make music together!
