# External payment request demo

This readme file provides step-by-step instructions on how to run an Express application. Follow the steps below to get started:

## Prerequisites

- Node.js and npm should be installed on your system. If you don't have them, you can download and install them from [Node.js official website ↗](https://nodejs.org).

## Installation

1. Clone the project repository to your local machine or download and extract the ZIP file.

1. Open a terminal or command prompt and navigate to the project's root directory.

1. Run the following command to install the project dependencies:

   ````bash
   npm install
   ```

   This command will fetch and install all the required packages specified in the `package.json` file.

   ````

## Running the Application

1. After the installation is complete, run the following command to start the Express application:

   ````bash
   node app.js
   ```

   The application will start running, and you should see a message in the terminal indicating that the server is running.

   ````

1. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Test Data

To test the application, you can use the following sample data:

```json
{
  "vehicle_category": "00",
  "payment_issuer": "1234",
  "plate": "ABC123",
  "account_number": "123456789"
}
```

This data represents a sample request payload that can be sent to the application. Use this data to verify the functionality and behavior of your application.

Feel free to explore and modify the codebase according to your requirements. Happy coding!