# Project Name

This is a project for [insert brief description of your project here]. It provides an API for managing employees, projects, and assignments.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Run the Project Locally](#run-the-project-locally)
4. [API Documentation](#api-documentation)

---

## Prerequisites

Ensure you have the following tools installed:

- **Node.js** (version >=14)
- **npm** (Node Package Manager, comes with Node.js)
- **PostgreSQL**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/excflor/habilis.git
   cd habilis
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file based on the `.env.example` provided:

   ```bash
   cp .env.example .env
   ```

4. Ensure your database server is running.

---

## Run the Project Locally

To start the project locally, run the following command:

```bash
npm run dev
```

## API Documentation

This API provides functionality for managing **employees**, **projects**, and **assignments**.

## Base URL

http://localhost:3000/api/v1

---

## **1. Create Employee**

- **Endpoint**: `/employees`
- **Method**: `POST`
- **Description**: Creates a new employee.

### Request Body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "Developer"
}
```

### Response:

```json
{
  "status": 201,
  "message": "success create employee",
  "data": {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Developer"
  }
}
```

## **2. Get All Employee**

- **Endpoint**: `/employees`
- **Method**: `GET`
- **Description**: Retrieves a list of all employees.

### Response:

```json
{
  "code": 200,
  "message": "success get employees",
  "data": [
    {
      "id": "47c9d8ee-a956-4bd8-afb2-f2641e63b3f1",
      "name": "goat",
      "email": "goat@gmail.com",
      "role": "Developer",
      "createdAt": "2024-12-25T14:19:11.734Z",
      "updatedAt": "2024-12-25T14:19:11.734Z",
      "deletedAt": null
    },
    {
      "id": "a19badba-646c-4af5-9065-eb852965d57e",
      "name": "griffin",
      "email": "griffin@gmail.com",
      "role": "Developer",
      "createdAt": "2024-12-25T14:19:17.309Z",
      "updatedAt": "2024-12-25T14:19:17.309Z",
      "deletedAt": null
    }
  ]
}
```
