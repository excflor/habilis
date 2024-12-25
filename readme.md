# Employee and Project Management System

This is a project for Employee and Project Management System. This system is intended to help organizations manage their
workforce and projects more effectively. It provides an API for managing employees, projects, and assignments.

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

## Employee

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

## **3. Get Employee By ID**

- **Endpoint**: `/employees/:id`
- **Method**: `GET`
- **Description**: Retrieves a single employee by ID.

### Response:

```json
{
  "code": 200,
  "message": "success get employee",
  "data": {
    "id": "47c9d8ee-a956-4bd8-afb2-f2641e63b3f1",
    "name": "goat",
    "email": "goat@gmail.com",
    "role": "Developer",
    "createdAt": "2024-12-25T14:19:11.734Z",
    "updatedAt": "2024-12-25T14:19:11.734Z",
    "deletedAt": null
  }
}
```

## **4. Update Employee**

- **Endpoint**: `/employees/:id`
- **Method**: `PUT`
- **Description**: Updates an existing employee's details.

### Request Body:

```json
{
  "name": "John Doe Updated",
  "email": "john.doe.updated@example.com",
  "role": "Senior Developer"
}
```

### Response:

```json
{
  "code": 200,
  "message": "success update employee",
  "data": {
    "id": "47c9d8ee-a956-4bd8-afb2-f2641e63b3f1",
    "name": "chill guy",
    "email": "chill@gmail.com",
    "role": "Developer",
    "createdAt": "2024-12-25T14:19:11.734Z",
    "updatedAt": "2024-12-25T20:59:51.490Z",
    "deletedAt": null
  }
}
```

## **5. Delete Employee**

- **Endpoint**: `/employees/:id`
- **Method**: `DELETE`
- **Description**: Deletes an employee by ID.

### Response:

```json
{
  "code": 200,
  "message": "success delete employee",
  "data": null
}
```

## Project

## **1. Create Project**

- **Endpoint**: `/projects`
- **Method**: `POST`
- **Description**: Creates a new project.

### Request Body:

```json
{
  "name": "X",
  "deadline": "2024-12-26",
  "status": "PENDING"
}
```

### Response:

```json
{
  "code": 200,
  "message": "success create project",
  "data": {
    "createdAt": "2024-12-25T21:08:22.930Z",
    "id": "da5a2500-0362-4b7d-8e13-f0c97886b6d6",
    "name": "X",
    "deadline": "2024-12-26T00:00:00.000Z",
    "status": "PENDING",
    "updatedAt": "2024-12-25T21:08:22.930Z",
    "deletedAt": null
  }
}
```

## **2. Get All Project**

- **Endpoint**: `/projects`
- **Method**: `GET`
- **Description**: Retrieves a list of all projects.

### Response:

```json
{
  "code": 200,
  "message": "success get projects",
  "data": [
    {
      "id": "4841e972-9ee9-411a-973e-188512dad8cf",
      "name": "Roro Jongrang",
      "deadline": "2024-12-26T00:00:00.000Z",
      "status": "PENDING",
      "createdAt": "2024-12-25T14:19:06.828Z",
      "updatedAt": "2024-12-25T14:19:06.829Z",
      "deletedAt": null
    },
    {
      "id": "7fa55a1c-732c-4ad6-a963-bccabfac3628",
      "name": "Agents AI",
      "deadline": "2024-12-26T00:00:00.000Z",
      "status": "PENDING",
      "createdAt": "2024-12-25T14:55:18.358Z",
      "updatedAt": "2024-12-25T14:55:18.359Z",
      "deletedAt": null
    },
    {
      "id": "da5a2500-0362-4b7d-8e13-f0c97886b6d6",
      "name": "X",
      "deadline": "2024-12-26T00:00:00.000Z",
      "status": "PENDING",
      "createdAt": "2024-12-25T21:08:22.930Z",
      "updatedAt": "2024-12-25T21:08:22.930Z",
      "deletedAt": null
    }
  ]
}
```

## **3. Get Project By ID**

- **Endpoint**: `/projects/:id`
- **Method**: `GET`
- **Description**: Retrieves a single project by ID.

### Response:

```json
{
  "code": 200,
  "message": "success get project",
  "data": {
    "id": "da5a2500-0362-4b7d-8e13-f0c97886b6d6",
    "name": "X",
    "deadline": "2024-12-26T00:00:00.000Z",
    "status": "PENDING",
    "createdAt": "2024-12-25T21:08:22.930Z",
    "updatedAt": "2024-12-25T21:08:22.930Z",
    "deletedAt": null
  }
}
```

## **4. Update Project**

- **Endpoint**: `/projects/:id`
- **Method**: `PUT`
- **Description**: Updates an existing project's details.

### Request Body:

```json
{
  "name": "XAI",
  "deadline": "2024-12-27",
  "status": "IN_PROGRESS"
}
```

### Response:

```json
{
  "code": 200,
  "message": "success update project",
  "data": {
    "id": "da5a2500-0362-4b7d-8e13-f0c97886b6d6",
    "name": "XAI",
    "deadline": "2024-12-27T00:00:00.000Z",
    "status": "IN_PROGRESS",
    "createdAt": "2024-12-25T21:08:22.930Z",
    "updatedAt": "2024-12-25T21:11:09.676Z",
    "deletedAt": null
  }
}
```

## **5. Delete Project**

- **Endpoint**: `/projects/:id`
- **Method**: `DELETE`
- **Description**: Deletes an project by ID.

### Response:

```json
{
  "code": 200,
  "message": "success delete project",
  "data": null
}
```

## Assignment

## **1. Assign Employees to Project**

- **Endpoint**: `/assignments`
- **Method**: `POST`
- **Description**: Assigns a list of employees to a project.

### Request Body:

```json
{
  "projectId": "1",
  "employeeIds": ["47c9d8ee-a956-4bd8-afb2-f2641e63b3f1", "a19badba-646c-4af5-9065-eb852965d57e"]
}
```

### Response:

```json
{
  "status": 200,
  "message": "success assign employees",
  "data": {
    "projectId": "1",
    "employeeIds": ["47c9d8ee-a956-4bd8-afb2-f2641e63b3f1", "a19badba-646c-4af5-9065-eb852965d57e"]
  }
}
```

## **2. Get Employees by Project ID**

- **Endpoint**: `/projects/:id/employees`
- **Method**: `GET`
- **Description**: Retrieves the list of employees assigned to a specific project.

### Response:

```json
{
  "status": 200,
  "message": "success get list of employees assigned to project",
  "data": {
    "id": "4841e972-9ee9-411a-973e-188512dad8cf",
    "name": "Roro Jongrang",
    "deadline": "2024-12-26T00:00:00.000Z",
    "employees": [
      {
        "id": "47c9d8ee-a956-4bd8-afb2-f2641e63b3f1",
        "name": "goat",
        "email": "goat@gmail.com"
      },
      {
        "id": "a19badba-646c-4af5-9065-eb852965d57e",
        "name": "griffin",
        "email": "griffin@gmail.com"
      }
    ]
  }
}
```

## **3. Get Projects by Employee ID**

- **Endpoint**: `/employees/:id/projects`
- **Method**: `GET`
- **Description**: Retrieves the list of projects assigned to a specific employee.

### Response:

```json
{
  "status": 200,
  "message": "success get list of projects assigned to employee",
  "data": {
    "code": 200,
    "message": "success get list of projects assigned to employee",
    "data": {
      "id": "47c9d8ee-a956-4bd8-afb2-f2641e63b3f1",
      "name": "goat",
      "email": "goat@gmail.com",
      "projects": [
        {
          "id": "4841e972-9ee9-411a-973e-188512dad8cf",
          "name": "Roro Jongrang",
          "status": "PENDING"
        },
        {
          "id": "7fa55a1c-732c-4ad6-a963-bccabfac3628",
          "name": "Agents AI",
          "status": "PENDING"
        }
      ]
    }
  }
}
```
