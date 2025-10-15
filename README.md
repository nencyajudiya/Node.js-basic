# Basic Node.js Application

A basic Node.js application built with Express following SOP standards, featuring file processing and REST API endpoints.

## 🚀 Features

- **REST API**: Express.js server with multiple endpoints
- **File Processing**: JSON file reading and data processing
- **CLI Integration**: Chalk colors and spinner animations
- **Error Handling**: Comprehensive error handling
- **Environment Management**: Development and production configurations
- **Code Standards**: Prettier formatting and proper structure

## 📁 Project Structure

```
Node/Basics/
├── utils/
│   ├── fileReader.js       # File reading utilities
│   └── spinner.js          # CLI spinner utilities
├── data/
│   └── users.json          # Sample user data
├── app.js                  # Express app configuration
├── index.js                # Application entry point
├── package.json            # Dependencies and scripts
├── .prettierrc             # Code formatting rules
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Node/Basics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```


## 🎯 API Endpoints

- `GET /` - Application information and available endpoints
- `GET /api/users` - Get all users from JSON file
- `GET /api/stats` - Get user statistics (average age, total count, etc.)

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run server` - Start development server with nodemon
- `npm run dev` - Start development server with environment variables
- `npm run format` - Format code with Prettier

## 🏗️ Development Standards

This project follows strict development standards:

- **Error Handling**: Comprehensive try-catch blocks
- **Code Formatting**: Prettier configuration for consistent code style
- **File Organization**: Proper folder structure with separation of concerns
- **Environment Management**: Separate development and production configurations
- **Documentation**: Comprehensive code comments and README

## 📦 Dependencies

### Production Dependencies
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `morgan` - HTTP request logger
- `chalk` - CLI colors
- `ora` - CLI spinner animations

### Development Dependencies
- `nodemon` - Development server with auto-restart
- `prettier` - Code formatter