# React Store Management App

This project is a store management application built using React, Redux (for state management), and Firebase and MongoDB (for database and user authentication). The application provides an interface for managing products, customers, and purchases, with initial data including two products and two customers. Users can interact with the system through several pages including "Menu - as navigation drawer", "Products", "Edit Product", "Customers", "Edit Customer", and "Purchases". Additionally, a user authentication & authorization system is implemented using MongoDB and JWT authentication & authorization service.

## Features

1. Menu Navigation: Provides navigation to "Products", "Customers", and "Purchases" pages and also for logging out the current connected user.
2. Products Page: Displays total amount of purchased products and detailed product data. Users can add new products to customers from this page.
3. Edit Product Page: Allows Admin users to update or delete product data.
4. Customers Page: Showcases customers and their purchased products. Users can also buy products from this page.
5. Edit Customer Page: Allows Admin users to update or delete customer data.
6. Purchases Page: Allows users to search for purchases by product, customer, or date.
7. User Authentication & Authorization: User login/register features using JWT authentication and MongoDB . User roles are defined as "User" and "Admin".

## Database Collections

**Products**:

- ID (Primary Key)
- Name
- Price
- Quantity

**Customers**:

- ID (Primary Key)
- First Name
- Last Name
- City

**Purchases**:

- ID (Primary Key)
- CustomerID (Foreign Key)
- ProductID (Foreign Key)
- Date

**Users (for authentication & authorization)**:

- Username (Primary Key)
- Password
- Role ("User" or "Admin")

## Installation

- Clone the repository: git clone https://github.com/username/react-store-management.git

### Client

2. Open a new terminal.
3. Navigate to the client directory: `cd client`.
4. Install dependencies: `npm/yarn install`.
5. Create a `.env` file in the server directory.
6. Add your Firebase configuration in a `.env` file at the root of the project.
7. Run the client: npm/yarn start.
8. Open http://localhost:3000 to view it in the browser.

### Server

1. Open a new terminal.
2. Navigate to the server directory: `cd server`.
3. Install dependencies: `npm/yarn install`.
4. Create a `.env` file in the server directory.
5. In the `.env` file, set the following variables:

   - `PORT`: The port number on which the server will run (e.g., `PORT=8800`).
   - `MONGO_DB_URI`: The MongoDB connection URI for connecting to the database (e.g., `MONGODB_URI=mongodb://localhost:27017/mydatabase`).
   - `JWT_SECRET_KEY`:This key used for authentication and authorization.
     Here is how you can generate this key:

     1.Open a terminal.

     2.Type the following command and press Enter to generate a random JWT secret key

     require('crypto').randomBytes(32).toString('hex')

     3.Copy the generated secret key.

     4.Open the .env file in the server directory.

     5.Set the JWT_SECRET_KEY variable by pasting the generated secret key.

     For example:

     JWT_SECRET_KEY=generated_secret_key

6. Save the `.env` file.
7. Run the server: `node server.js` or npm/yarn start.

## Permissions

1. All registered users can see the "Products", "Customers", and "Purchases" pages.
2. Only Admins can edit a product or customer data.

## Technologies Used

## Technologies Used

- **VS Code**
  ![VS Code](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png)
- **NodeJS**
  ![NodeJS](IMAGE_URL)
- **React**
  ![React](IMAGE_URL)
- **Redux**
  ![Redux](IMAGE_URL)
- **Firebase**
  ![Firebase](IMAGE_URL)
- **MongoDB**
  ![MongoDB](IMAGE_URL)
- **Express**
  ![Express](IMAGE_URL)
- **JSON Web Tokens**
  ![JWT](IMAGE_URL)
