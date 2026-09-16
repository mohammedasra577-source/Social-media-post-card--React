# Social Media App

A React post card for S.M.F.Asra with a flower profile picture, a lakeside holiday photo, and a light gray background.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Project structure

```text
social-media-app/
|-- public/
|   `-- assets/
|       |-- profile2.png
|       |-- beach.jpg
|       |-- profile-flowers.jpg
|       `-- lakeside-holiday.jpg
|-- src/
|   |-- App.jsx
|   |-- App.css
|   |-- PostCard.jsx
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

The current workspace folder is named `tutorial-06`; the package name is `social-media-app`.

Edit the post content in `src/PostCard.jsx` and its styling in `src/App.css`.
Images in `public/assets` are served at `/assets/` with Vite's configured base path.

Photos are from Unsplash:
- Profile: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b
- Beach: https://images.unsplash.com/photo-1507525428034-b723cf961d3e
- Current profile (flowers): https://images.unsplash.com/photo-1490750967868-88aa4486c946
- Current post (lake): https://images.unsplash.com/photo-1470770841072-f978cf4d019e
