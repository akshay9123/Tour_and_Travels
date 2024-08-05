/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image-first': "url('src/images/mountainHomepage.jpg')",
        'custom-image-second' : "url('https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?cs=srgb&dl=pexels-pixabay-269583.jpg&fm=jpg')",
        'custom-image-mountain' : "url('https://www.tourmyindia.com/blog//wp-content/uploads/2022/08/Best-Hill-Stations-to-Explore-in-India.jpg')",
        'custom-image-roadtrip' : "url('https://366e203a.rocketcdn.me/wp-content/uploads/2020/09/Best-Road-Trips-in-India.jpg')",
      },
    },
  },
  plugins: [],
}