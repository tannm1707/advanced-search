# Task Checklist

**Done**:

- API Crud
- Searching Product with Elasticsearch
- Sync Post, Update, Delete in CRUD with Elasticsearch indexing
- Creating API Swagger Document
- Data report: Total product report, Average price report
  **Not Done**:
- Sync data from MongoDB to Elasticsearch ( tried using monstache but still cannot make it work )

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---

# Product Management API

## Overview

This API allows you to manage products with basic CRUD operations, including the ability to get total and average reports. The product structure includes a `name`, `description`, `price`, and `category`.

## Product Structure

The product structure is as follows:

```json
{
  "name": "Mechanical Keyboard",
  "description": "Durable keyboard for typing and gaming",
  "price": 100,
  "category": "Accessories"
}
```

## Endpoints

### 1. **Create Product**

- **URL**: `/products`
- **Method**: `POST`
- **Description**: Create a new product.
- **Request Body**:

```json
{
  "name": "Mechanical Keyboard",
  "description": "Durable keyboard for typing and gaming",
  "price": 100,
  "category": "Accessories"
}
```

- **Response**:

```json
{
  "data": {
    "name": "Mechanical Keyboard",
    "description": "Durable keyboard for typing and gaming",
    "price": 100,
    "category": "Accessories"
  }
}
```

### 2. **Bulk Create Products**

- **URL**: `/products/bulk-create`
- **Method**: `POST`
- **Description**: Create multiple new product.
- **Request Body**:

```json
{
  "products": [
    {
      "name": "Laptop Pro",
      "description": "High-performance laptop for professionals",
      "price": 1500,
      "category": "Electronics"
    },
    {
      "name": "Smartphone X",
      "description": "Latest smartphone with advanced features",
      "price": 1000,
      "category": "Electronics"
    },
    {
      "name": "Gaming Chair",
      "description": "Comfortable chair for gaming enthusiasts",
      "price": 300,
      "category": "Furniture"
    },
    {
      "name": "Wireless Earbuds",
      "description": "Compact and high-quality audio device",
      "price": 150,
      "category": "Accessories"
    },
    {
      "name": "Mechanical Keyboard",
      "description": "Durable keyboard for typing and gaming",
      "price": 100,
      "category": "Accessories"
    }
  ]
}
```

- **Response**:

```json
{
  "products": [
    {
      "name": "Laptop Pro",
      "description": "High-performance laptop for professionals",
      "price": 1500,
      "category": "Electronics"
    },
    {
      "name": "Smartphone X",
      "description": "Latest smartphone with advanced features",
      "price": 1000,
      "category": "Electronics"
    },
    {
      "name": "Gaming Chair",
      "description": "Comfortable chair for gaming enthusiasts",
      "price": 300,
      "category": "Furniture"
    },
    {
      "name": "Wireless Earbuds",
      "description": "Compact and high-quality audio device",
      "price": 150,
      "category": "Accessories"
    },
    {
      "name": "Mechanical Keyboard",
      "description": "Durable keyboard for typing and gaming",
      "price": 100,
      "category": "Accessories"
    }
  ]
}
```

### 3. Get All Products

#### **Endpoint**: `GET /products`

Retrieve a list of all products, with optional filtering, sorting, and pagination.

#### **Query Parameters**:

| **Parameter** | **Type**  | **Description**                                                | **Default Value** | **Required** |
| ------------- | --------- | -------------------------------------------------------------- | ----------------- | ------------ |
| `name`        | `string`  | Filter by item name                                            | -                 | No           |
| `page`        | `integer` | Current page for pagination                                    | 1                 | No           |
| `limit`       | `integer` | Number of items per page                                       | 10                | No           |
| `minPrice`    | `integer` | Minimum price for filtering                                    | -                 | No           |
| `maxPrice`    | `integer` | Maximum price for filtering                                    | -                 | No           |
| `category`    | `string`  | Filter by item category                                        | -                 | No           |
| `sortBy`      | `string`  | Field by which to sort the items (`name`, `category`, `price`) | `name`            | No           |
| `sortOrder`   | `string`  | Sort order of the items (`asc`, `desc`)                        | `asc`             | No           |

##### **Rquest Example**:

```bash
GET /products?page=1&limit=10&category=Accessories&sortBy=price&sortOrder=asc
```

#### **Response**:

A paginated list of products based on the provided query parameters.

##### **Success Response**:

- **Code**: `200 OK`
- **Content**:

```json
{
  "page": 1,
  "limit": 10,
  "total": 100,
  "data": [
    {
      "name": "Mechanical Keyboard",
      "description": "Durable keyboard for typing and gaming",
      "price": 100,
      "category": "Accessories"
    },
    {
      "name": "Gaming Mouse",
      "description": "Precision mouse for gaming",
      "price": 50,
      "category": "Accessories"
    },
    ...
  ]
}
```

##### **Error Response**:

- **Code**: `200 OK`
- **Content**:

```json
{
  "statusCode": 400,
  "message": "Invalid query parameters",
  "error": "Bad Request"
}
```

### 4. **Get Product by id**

- **URL**: `/products/:id`
- **Method**: `GET`
- **Description**: Get a product by its id.
- **Response**:

```json
{
  "data": {
    "id": "1",
    "name": "Mechanical Keyboard",
    "description": "Durable keyboard for typing and gaming",
    "price": 100,
    "category": "Accessories"
  }
}
```

### 5. **Update Product**

- **URL**: `/products/:id`
- **Method**: `PATCH`
- **Description**: Update the details of an existing product.
- **Request Body**:

```json
{
  "name": "Updated Keyboard Name",
  "price": 120
}
```

##### **Success Response**:

- Code: 200 OK
- Content:

```json
{
  "data": {
    "id": "1",
    "name": "Mechanical Keyboard",
    "description": "Durable keyboard for typing and gaming",
    "price": 100,
    "category": "Accessories"
  }
}
```

### 6. **Delete Product**

- **URL**: `/products/:id`
- **Method**: `DELETE`
- **Description**: Delete a product by its id.
- **Request Body**:
  Endpoint: DELETE /products/:id
  Delete a product by its ID.

##### **Success Response**:

- Code: 200 OK
- Content:

```json
{
  "response": "Successfully deleting product with ID 676e581573836df47bc1ef03"
}
```

### 7. Get Total Report

Retrieve the total count of products, optionally filtered by category.

#### Endpoint

- **GET** `/api/v1/report/total`

#### Query Parameters

| Parameter | Type   | Required | Description                 |
| --------- | ------ | -------- | --------------------------- |
| category  | string | No       | Filter by product category. |

#### Request Example

```http
GET /api/v1/products/report/total?category=Accessories
```

##### **Success Response**:

- **Status Code**: 200 OK
- **Body**:

```json
{
  "count": 50,
  "category": "Accessories"
}
```

### 8. Get Average Report

Retrieve the average price of products in each category along with the count of products.

#### Endpoint

- **GET** `/api/v1/report/average`

#### Request Example

```http
GET /api/v1/products/report/average
```

##### **Success Response**:

- **Status Code**: 200 OK
- **Body**:

```json
[
  {
    "category": "Accessories",
    "averagePrice": 50,
    "count": 10
  },
  {
    "category": "Electronics",
    "averagePrice": 300,
    "count": 20
  }
]
```

### 9. Get Price Report

Retrieve the highest and lowest price products in the database, optionally filtered by category.

#### Endpoint

- **GET** `/api/v1/products/price-report`

#### Query Parameters

| Parameter  | Type   | Required | Description                    |
| ---------- | ------ | -------- | ------------------------------ |
| `category` | string | No       | Optional category to filter by |

#### Request Example

```http
GET /api/v1/products/price-report?category=Electronics
```

##### **Success Response**:

- **Status Code**: 200 OK
- **Body**:

```json
{
  "data": {
    "category": "Accessories",
    "products": {
      "highest": {
        "_id": "676e581573836df47bc1eeff",
        "name": "Laptop Pro",
        "description": "High-performance laptop for professionals",
        "price": 1500,
        "category": "Electronics",
        "__v": 0
      },
      "lowest": {
        "_id": "676e581573836df47bc1ef02",
        "name": "Wireless Earbuds",
        "description": "Compact and high-quality audio device",
        "price": 150,
        "category": "Accessories",
        "__v": 0
      }
    }
  }
}
```

### 10. Search Products

Search for products using Elasticsearch with filters for term, category, and price range.

#### Endpoint

- **GET** `/api/v1/products/search`

#### Request Parameters

| Parameter  | Type   | Required | Description                                 |
| ---------- | ------ | -------- | ------------------------------------------- |
| `term`     | string | No       | Search term for product name or description |
| `category` | string | No       | Category of the product                     |
| `minPrice` | number | No       | Minimum price of the product                |
| `maxPrice` | number | No       | Maximum price of the product                |

#### Request Example

```http
GET /api/v1/products/search?term=laptop&category=Electronics&minPrice=100&maxPrice=1500
```

##### **Success Response**:

- **Status Code**: 200 OK
- **Body**:

```json
[
  {
    "category": "Accessories",
    "averagePrice": 50,
    "count": 10
  },
  {
    "category": "Electronics",
    "averagePrice": 300,
    "count": 20
  }
]
```

## How to Run with Docker Compose

### Prerequisites

- Install **Docker Desktop** on your system.
- Ensure ports `3000` (app), `9200` (Elasticsearch), and `27017` (MongoDB) are available.

---

### Steps to Run the Application

1. **Clone the Repository**:

```bash
git clone <repository_url>
cd <repository_name>
```

2. **Set Up Environment Variable**:

- Create an .env file in the project root and provide the necessary environment variables. Example:

```env
APP_PORT=3000
DB_NAME=bonboncar
MONGODB_URI=mongodb://localhost:27017/
DB_USERNAME=root
DB_PASSWORD=12345
API_BASE_PATH=api
API_VERSION_PREFIX=v1
```

3. **Run Docker Compose**:

- Build and start the containers:

```bash
docker-compose up --build
```

4. **Access the Application**:

- API: Navigate to http://localhost:3000/api/v1 for the API.
- Swagger UI: Navigate to http://localhost:3000/api for API documentation.
- Elasticsearch: Navigate to http://localhost:9200.
- Kibana: Navigate to http://localhost:5601.

## Example Docker Compose Commands

- Run the services with build:

```bash
docker-compose up --build -d
```

- Stop the running containers:

```bash
docker-compose down
```
