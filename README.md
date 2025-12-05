# Back End Development 2 - Rocket Genesis API with MongoDB

## Project Overview

This module advances **backend development with MongoDB integration**. You'll learn to build a production-ready RESTful API with database persistence, user authentication, protected routes, and a scalable MVC (Model-View-Controller) structure. This includes implementing MongoDB schemas, middleware layers, and a clean separation of public and protected endpoints.

## Key Concepts to Research

### Database Layer (MongoDB & Mongoose)

- **NoSQL Databases**: Document-based storage vs. relational databases
- **MongoDB Atlas**: Cloud-hosted MongoDB service
- **Mongoose ODM**: Object Data Modeling library for MongoDB
- **Database Connection**: Connection strings, connection pooling, centralized management
- **Collections & Documents**: MongoDB's tables (collections) and JSON-like data structures (BSON)
- **_id Field**: MongoDB's automatic unique identifier
- **CRUD Operations**: `Model.create()`, `Model.find()`, `Model.findById()`, `Model.findByIdAndUpdate()`, `Model.findByIdAndDelete()`
- **Schema Definition**: Defining document structure and data types
- **Schema Types**: String, Number, Date, Boolean, Array
- **Schema Options**: `required`, `unique`, `default`, `trim`, `lowercase`
- **Validation**: Built-in validators for data integrity
- **Timestamps**: `createdAt`, `updatedAt` automatic fields
- **Model Creation**: `mongoose.model()` for creating models

### MVC Architecture & Project Structure

- **Model**: Data layer (Schemas, database interaction)
- **View**: Response layer (JSON responses in REST APIs)
- **Controller**: Business logic layer (request processing)
- **Separation of Concerns**: Each layer has distinct responsibility
- **Scalability**: Easy to add features without breaking existing code
- **Maintainability**: Clear structure for debugging and updates
- **Project Organization**:
  - `src/`: Source code organization
  - `controllers/`: Business logic separated by access level
  - `routes/`: Route definitions separated by access level
  - `shared/`: Common utilities, middleware, resources
  - `db/`: Database configuration and schemas
  - `middleware/`: Custom middleware functions
  - `utilities/`: Helper functions, calculations

### Middleware & Routing

- **Express Middleware**: Functions that execute during request-response cycle
- **Middleware Order**: Importance of middleware sequence
- **Custom Middleware**: Creating authentication middleware
- **Middleware Chaining**: `next()` function to pass control
- **Route-Level Middleware**: Applying middleware to specific routes
- **Application-Level Middleware**: Global middleware for all routes
- **Route Modules**: Separate files for different resources
- **Router Objects**: `express.Router()` for modular routing
- **Route Prefixes**: Group routes under common paths (`/api/agents/`, `/api/region/`, etc.)

### Controllers & Business Logic

- **Controller Functions**: Handling business logic separately from routes
- **Request Processing**: Extracting data from `req.body`, `req.params`
- **Response Formatting**: Standardized JSON responses
- **Controller Organization**: One controller per resource type
- **Reusable Logic**: DRY principle in controller functions

### Authentication & Authorization

- **Authorization Header**: Bearer token in request headers
- **JWT Authentication**: Token-based authentication
- **Protected Routes**: Middleware-secured endpoints
- **Authentication Errors**: Invalid tokens, expired tokens

### Error Handling & Async Operations

- **Async Functions**: Functions that return promises
- **Await Keyword**: Waiting for promise resolution
- **Try-Catch Blocks**: Async/await error handling in controllers
- **Database Operations**: All Mongoose methods return promises
- **HTTP Status Codes**: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)
- **Error Messages**: User-friendly error responses
- **Validation Errors**: Mongoose validation error handling
- **Database Errors**: Connection errors, query errors

### Security & Configuration

- **Environment Variables**: PORT, MONGO_URI, JWT_SECRET
- **Connection Strings**: MongoDB connection URI format
- **Secret Keys**: JWT signing secrets
- **Configuration Management**: Environment-specific settings
- **Security Best Practices**:
  - Never commit `.env` to Git (add to `.gitignore`)
  - Use strong JWT secrets (long random strings)
  - Validate all input data
  - Don't expose sensitive information in error messages
  - Use HTTPS in production

### API Testing (Postman)

- **Authorization Headers**: Setting Bearer tokens
- **Collection Variables**: Storing tokens, base URLs
- **Environment Management**: Dev, staging, production environments

## Learning Resources

Use search engines and AI assistants to explore these concepts:

- "MongoDB tutorial for beginners"
- "Mongoose ODM getting started"
- "JWT authentication Node.js"
- "Express middleware explained"
- "MVC architecture in Node.js"
- "MongoDB schema design best practices"
- "RESTful API authentication strategies"
- "Express Router modular routing"
- "MongoDB CRUD operations with Mongoose"
- "Protected routes Express.js"
- "Async/await error handling patterns"

## Development Tips

- **Environment Setup**: Configure `.env` with MONGO_URI, JWT_SECRET, PORT
- **MongoDB Atlas**: Create free cluster for development
- **Database Monitoring**: Use MongoDB Atlas dashboard to view data
- **Schema Design**: Plan data structure before creating schemas
- **Middleware Order**: Authentication middleware before protected routes
- **Async/Await**: Always use try-catch with database operations
- **Test Authentication**: Get token first, then test protected routes
- **Postman Variables**: Store token in collection variable

## Common Issues & Solutions

- **Cannot Connect to MongoDB**: Check MONGO_URI, network access in Atlas
- **Connection Timeout**: Check MongoDB Atlas IP whitelist
- **401 Unauthorized**: Token missing or invalid, login again
- **Validation Error**: Check required fields in request body
- **Schema Validation Failed**: Check data types match schema definition
- **Duplicate Key Error**: Email or unique field already exists
- **Module Not Found**: Run `npm install`
- **CORS Error**: Server includes CORS middleware, check origin
- **Missing Environment Variables**: Verify `.env` file exists and is loaded
