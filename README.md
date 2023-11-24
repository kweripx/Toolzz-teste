# Teste Toolz

This project is a Node.js application using Prisma, Express, and TypeScript.

## Prerequisites

- Node.js
- npm or yarn
- Docker for running PostgreSQL database
- Prisma CLI for database migrations

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kweripx/teste-toolz.git
    cd teste-toolz
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn
    ```

3. Create a .env file and fill in your database credentials and other configuration options.
    ```
    # Copy this file to .env and replace the values with your actual database credentials
    DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
    ```

## Running the Application

1. Start the PostgreSQL database:
    ```bash
    docker-compose up -d
    ```

2. Apply database migrations:
    ```bash
    npm run migrate:dev
    # or
    yarn migrate:dev
    ```

3. Build the application:
    ```bash
    npm run build
    # or
    yarn build
    ```

4. Start the application:
    ```bash
    npm start
    # or
    yarn start
    ```

5. The application should now be running at `http://localhost:3000`.

## Running the Tests

1. Run the tests:
    ```bash
    npm test
    # or
    yarn test
    ```

2. To run tests in watch mode:
    ```bash
    npm run test:watch
    # or
    yarn test:watch
    ```

## License

This project is licensed under the ISC License.