# [Kewlest](https://thaumaturgists.github.io/Kewlest/)

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
> I have commented out the JSON in the project because it is configured for GitHub Pages, and there are some dependency issues with React.
```bash
git clone https://github.com/thaumaturgists/Kewlest.git
cd Kewlest
// npm install <!-- Please, only if you know what you are doing. -->
```
### Getting React Started Simply

To begin using React, you can follow the guides in the folders [MM-jsx.md](https://github.com/thaumaturgists/Kewlest/blob/main/src/components/MusicMixer/React/JSX/MM-jsx.md), or [MM-tsx.md](https://github.com/thaumaturgists/Kewlest/blob/main/src/components/MusicMixer/React/TSX/MM-tsx.md). Make sure your JSON files are in LTS (latest stable release) format, or use whatever version best fits your needs.
```
 musicMixer/                         # Music mixer component
   │  ├── HTML/                      # HTML implementation
   │  ├── REACT/                     # React implementation
          ├── JSX/
          │    ├── MM-jsx.md         # JSX guide
          │    └── musicMixer.jsx    # React JSX component
          └── TSX/
```

### Running the Project
> ISSUE Date: 06/03/2025
> 
> For deploying React on GitHub Pages, I plan to utilize YAML and a CI pipeline. While I have identified some significant security issues during testing, there is no cause for concern, as these do not impact my project.
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

If you want to build a complete application, a great starting point is to follow the guide on developing with [Electron](https://www.electronjs.org/docs/latest/development/build-instructions-gn). If you need assistance with that, feel free to reach out to me on GitHub, and I will respond as soon as possible!

Once the project is built locally in Electron, use the following command:

```bash
npm start
```

This will start the development server and open the application in Electron.

## Showcase

Visit the [Kewlest website](https://thaumaturgists.github.io/Kewlest/) to see a live demonstration of the music player. I hope you enjoy it as much as I loved creating it!

### React Showcase

To see a working example of a musicMixer.jsx set up using ```<script type="text/babel" src="./musicMixer.jsx"></script>```, you can either scroll to the bottom of the Kewlest website, and click on the [JSX](https://thaumaturgists.github.io/Kewlest/jsx-example.html) link, or click it here!
#### Simple HTML used:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Mixer</title>
    
    <!-- Load React, ReactDOM & Babel -->
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@latest/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <!-- Load Your JSX Component -->
    <script type="text/babel" src="./musicMixer.jsx"></script>
</body>
</html>
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Thank you to all the contributors and the community for your support. Let's make music together!
