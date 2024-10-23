This project is a RESTful API for managing personal financial records. Users can record income and expenses, retrieve past transactions, and get summaries by category or time period. The API includes authentication using JWT to protect user data.

Features
User Registration and Login with encrypted passwords (using bcrypt).
JWT-based authentication to protect routes.
Manage financial records with endpoints for:
Adding income or expense transactions.
Retrieving transactions (all or by ID).
Updating and deleting transactions.
Transaction summaries (filtered by date range or category).
Support for both SQLite (for simple local storage).
Technologies Used
Node.js with Express.js: Backend framework.
SQLite or MongoDB: Database solutions.
bcrypt.js: For password hashing.
jsonwebtoken (JWT): For route protection with tokens.
dotenv: For environment variable management.
Getting Started
Prerequisites
Node.js installed.
SQLite or MongoDB (depending on the database you choose).
Postman or another API testing tool.



1. Installation
Clone the repository:

git clone https://github.com/Shubham-168/personal-expense-tracker.git

2. Install dependencies:

    npm install

3. Set up environment variables:

JWT_SECRET=your_jwt_secret

PORT=3000


4. Set up the database:

       For SQLite: No additional steps required; the database will be created locally at runtime.
       For MongoDB: Ensure that your MongoDB instance is running and the URI in the .env file is correct.



Running the API
Start the server:
    npm start


The API will run on http://localhost:3000.

API Endpoints


Authentication


Register a new user:

    POST /auth/register

Login:

    POST /auth/login

Transactions (Requires JWT Token)

Add a transaction (income or expense):

        POST /transactions


Requires Authorization: Bearer <token> header.

    Retrieve all transactions:

    GET /transactions

Requires Authorization: Bearer <token> header.

Retrieve a transaction by ID:

        GET /transactions/id


Requires Authorization: Bearer <token> header.


Update a transaction by ID:

PUT /transactions/id


Delete a transaction by ID:

        DELETE /transactions/


Requires Authorization: Bearer <token> header.
        
        Get a summary of transactions:

        GET /transactions/summary


Optionally filter by date range or category (e.g., /transactions/summary?start=2024-01-01&end=2024-12-31&category=salary).



Middleware

JWT Authentication: Protects all routes related to transactions. Add the token returned from login in the Authorization header like:

Authorization: Bearer <token>


Error Handling


Common errors handled include:


Invalid or missing token: For routes that require authentication.

Invalid input: When required fields (e.g., amount, type) are missing.

Non-existent resource: If a transaction or user is not found.

