# Weather App

This web application allows users to check the current weather report in Celsius for a selected city, using the Open Weather API. The backend for this app is deployed on AWS.

## Live Demo

You can try the live demo of the Weather App on: [https://joyal-weather-app.netlify.app/](https://joyal-weather-app.netlify.app/)

## Technologies Used

- React
- Express for the backend server
- AWS for backend deployment
- Host with Netlify

## Features

- User-friendly interface to enter a city and view its current weather
- Error handling for city not found
- Displays weather condition along with temperature in Celsius
- Keeps a history of previously searched cities

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/joyal7701/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the app.

## Stretch Goals Achieved

- Automated deployment using Netlify for the frontend
- Backend server using Express deployed on AWS to store user search history

## Contributing

Contributions are welcome! Please create a pull request for any major changes or improvements you'd like to make.

## Acknowledgements

- Open Weather API for providing weather data
