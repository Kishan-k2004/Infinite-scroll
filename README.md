📸 Infinite Scroll Photo Gallery
A responsive photo gallery web application built with React, Tailwind CSS, and Vite that fetches curated images from the Pexels API. It supports infinite scroll and uses Masonry layout to display images beautifully.

🚀 Live Demo
https://infinite-scroll-ashen-eta.vercel.app

📦 Tech Stack
React 19

Vite

Tailwind CSS

React Masonry CSS

Pexels API (via fetch, no SDK)

Framer Motion (optional animations)

Styled Components (used in card layout)

📷 Features
📸 Fetches high-quality curated images from the Pexels API

🔁 Infinite scroll for seamless image loading

🧱 Responsive masonry layout

⚡ Fast Vite bundler

🌗 Clean and modern UI using Tailwind CSS

🔑 Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/photo-gallery.git
cd photo-gallery
2. Install dependencies
bash
Copy
Edit
npm install
3. Create .env file
ini
Copy
Edit
VITE_Api_Key=your_pexels_api_key_here
You can get your API key from pexels.com/api.

4. Start the dev server
bash
Copy
Edit
npm run dev

📁 Folder Structure
bash
Copy
Edit
src/
│
├── components/
│   ├── Api.jsx          # Main component fetching photos
│   ├── Card.jsx         # Individual photo card
│   ├── Loader.jsx       # Loading spinner
|   |── Api.css
|   |── App.css
│
├── Home.jsx
├── main.jsx
├── index.css

🧱 Masonry Layout
Implemented using react-masonry-css for a responsive, Pinterest-style grid.

📜 License
All license to Kishan Khansali

