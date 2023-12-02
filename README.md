# Project Name

Mpesa Daraja APIS Intergration

## Description

This project is a web application that facilitates online payments using the Safaricom Daraja API. It allows users to initiate payments by providing an amount and a phone number.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`
2. Navigate to the project directory:
   frontend: `cd Frontend`
   backend: `cd Backend`
3. Install dependencies: `npm install`
4. Start the backend server: `npm start`
5. Start the frontend application: `npm run dev`

## Usage

Once the project is set up, open a web browser and go to `http://localhost:5173` to access the application. Enter the desired amount and phone number, then click the "Initiate Payment" button to start the payment process.

## Backend Setup

The backend of this project is built with Node.js and Express. It handles payment initiation through the Safaricom Daraja API.

### Backend Dependencies

- Express
- Axios
- dotenv
- cors

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

## Frontend Setup

The frontend of this project is built with React. It provides the user interface for initiating payments.

### Frontend Dependencies

- React
- Axios

## Endpoints

### `/api/initiatePayment`

- **Method:** POST
- **Description:** Initiates a payment process
- **Request Body:** JSON object containing amount and phoneNumber
- **Response:** Success or error message

## Contributing

Contributions to this project are welcome. If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.
