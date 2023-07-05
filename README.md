# API Checkpoint

This project is a React application that allows you to test and monitor APIs.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/api-checkpoint.git`
2. Navigate to the project directory: `cd api-checkpoint`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to see the application.

## Features

- Allows users to send HTTP requests to APIs and view the response.
- Supports different request methods such as GET, POST, PUT, DELETE.
- Provides an intuitive interface for inputting request details (URL, headers, body, etc.).
- Displays the response with status code, headers, and response body.
- Allows users to save and load frequently used API configurations.

## Technologies Used

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [axios](https://axios-http.com/): Promise-based HTTP client for making API requests.
- [react-bootstrap](https://react-bootstrap.github.io/): UI library for responsive design and pre-styled components.

## Project Structure

- `public/`: Contains the HTML template and other static assets.
- `src/`: Contains the React components and other JavaScript files.
  - `App.js`: Main component that renders the API testing interface.
  - `RequestForm.js`: Component responsible for handling the API request form.
  - `ResponseDisplay.js`: Component for displaying the API response.
  - `SavedRequests.js`: Component for managing saved API configurations.
  - `styles.css`: CSS file containing styles for the application.
- `README.md`: Documentation file providing information about the project.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
