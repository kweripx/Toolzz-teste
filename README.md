# Teste Toolz

This project is a Node.js application using Prisma, Express, and TypeScript.

## Prerequisites

- Node.js
- npm
- Docker for running PostgreSQL database
- Prisma CLI for database migrations

## Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:kweripx/Toolzz-teste.git
    cd Toolzz-teste
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn
    ```

3. Create a .env file and fill in your database credentials and other configuration options.
    ```
    # Copy this file to .env and replace the values with your actual database credentials present on docker-compose.
    
    DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
    ```

## Running the Application

1. Start the PostgreSQL database:
    ```bash
    npm run postgres:start
    ```

2. Apply database migrations:
    ```bash
    # before apply migration run
    npm run migrate:reset
    # now run migrate:dev
    npm run migrate:dev
    ```

3. Build the application:
    ```bash
    npm run build
    ```

4. Start the application:
    ```bash
    npm start
    ```

5. The application should now be running at `http://localhost:3000`. Go to `http://localhost:3000/docs` to see API endpoints.

## Running the Tests

1. Run the tests:
    ```bash
    npm test
    ```