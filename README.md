# API Usage Guide

This guide provides instructions on how to use the API endpoints for registering users, logging in, updating user profiles, creating products, and retrieving product information.

## 1. Register a User

### POST Request

Endpoint: `http://localhost:3000/api/auth/register`

Request Body:
```json
{
  "username": "manoj",
  "email": "manoj@gmail.com",
  "password": "123"
}
```
## 2. Login

### POST Request 

Endpoint: `http://localhost:3000/api/auth/login`

Request Body:

```json
{
  "email": "manoj@gmail.com",
  "password": "123"
}
```

## 3. Update the User Profile

### PUT Request

Endpoint: `http://localhost:3000/api/users/65dc8050c5e976361ff6cb25`

Request Body:

```json
Copy code
{
    "userId": "65dc8050c5e976361ff6cb25",
    "username": "manoj updated",
    "password": "456784",
    "email": "manojupdated@gmail.com"
}
```

## 4. Create Product
### POST Request

Endpoint: `http://localhost:3000/api/products/create/new`

Request Body:

```json
{
  "title": "HCL Laptop",
  "desc": "HD laptop",
  "img": "image.png",
  "categories": "electronics",
  "size": "L",
  "color": "black",
  "price": "10000"
}
```

## 5. Get all the Products

### GET Request

Endpoint: `http://localhost:3000/api/products`

## 6. Get all the Products based on Search
### 1. Searching any Products
#### GET Request
Endpoint: `http://localhost:3000/api/products?new=HCL`

### 2. Searching Based on Categories
#### GET Request
Endpoint:` http://localhost:3000/api/products?category=electronics`
