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
  "data":
    {
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

| **Parameter**   | **Type**    | **Description**                                                | **Default Value**   | **Required** |
|-----------------|-------------|----------------------------------------------------------------|---------------------|--------------|
| `name`          | `string`    | Filter by item name                                            | -                   | No           |
| `page`          | `integer`   | Current page for pagination                                    | 1                   | No           |
| `limit`         | `integer`   | Number of items per page                                       | 10                  | No           |
| `minPrice`      | `integer`   | Minimum price for filtering                                    | -                   | No           |
| `maxPrice`      | `integer`   | Maximum price for filtering                                    | -                   | No           |
| `category`      | `string`    | Filter by item category                                        | -                   | No           |
| `sortBy`        | `string`    | Field by which to sort the items (`name`, `category`, `price`) | `name`            | No           |
| `sortOrder`     | `string`    | Sort order of the items (`asc`, `desc`)                        | `asc`               | No           |

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

```bash
GET /products?page=1&limit=10&category=Accessories&sortBy=price&sortOrder=asc
```

