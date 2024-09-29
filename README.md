# Safety Purchase Backend

## About the Project

Safety Purchase is a solution designed to protect elderly people from potential scams when shopping online. This Chrome browser extension verifies the credibility of online stores by obtaining their REGON, NIP, or other unique identification numbers to ensure that the store is legitimate and safe for transactions. Depending on the result of the verification, a popup will be displayed when the user opens the store page, informing them whether the store is trustworthy.The backend is built using **NestJS**, with **TypeORM** for database interactions with **PostgreSQL**. The project is managed using **Yarn**.

## Requirements

Make sure you have the following installed before running the application:

- Node.js (v14+)
- Yarn (v1.22+)
- PostgreSQL (v12+)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hackyeah2024-bezpieczny-zakup/backend.git
   cd backend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Configure the PostgreSQL database by creating an `.env` file from the `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your database settings:

   ```env
   DB_TYPE="postgres"
   DB_HOST="localhost"
   DB_PORT=5432
   DB_USERNAME="postgres"
   DB_PASSWORD=""
   DB_NAME="secure_purchase"
   DB_IS_LOGGING_ENABLED=true
   DB_IS_SYNCHRONIZING_ENABLED=true
   ```

4. Create database named 'secure_purchase'.

## Running the Application

To run the backend locally:

1. Ensure PostgreSQL is running.
2. Start the application:

   ```bash
   yarn start:dev
   ```

   The backend will be available at `http://localhost:3000`.

## API Endpoints

The backend provides several API endpoints to verify websites based on unique identification numbers such as REGON or NIP. Key endpoints include:

- `POST /urls/check` – Verifies the online store based on various criteria such as REGON, NIP, date of domain registration and date of establishment of company. [Not fully implemented yet]

## About Us

We are **Tea Interns**, a team passionate about creating solutions that ensure online safety, especially for vulnerable groups such as the elderly. Our goal is to prevent scams and fraudulent activities through advanced verification systems. More about our team will be shared soon!

## Authors

- **Maksymilian Przywara** [**.maksfatslayer**] – Team Leader
- **Piotr Bukowiec** [**walker91xd**]- Backend Developer
- **Bartosz Szlepecki** [**iangoldsnaut**] - Frontend Developer

## License

This project is licensed under the MIT License.
