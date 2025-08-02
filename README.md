# FizzBuzz Kata

## What is the FizzBuzz Kata?

FizzBuzz is a classic programming exercise that tests basic programming logic and modular arithmetic. The rules are simple:

- For numbers divisible by 3, return "Fizz"
- For numbers divisible by 5, return "Buzz"  
- For numbers divisible by both 3 and 5, return "FizzBuzz"
- For all other numbers, return the number itself

**Example sequence:** 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16...

This kata is often used in coding interviews and as a TDD (Test-Driven Development) exercise to practice writing clean, maintainable code.

## How to Run the Project

### Prerequisites
- Node.js (version 18 or higher)
- npm package manager

### Installation & Setup
```shell script
# Clone the repository
git clone <repository-url>
cd fizzbuzz

# Install dependencies
npm install
```


### Available Scripts

```shell script
# Start development server
npm run dev

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests once (CI mode)
npm run test:run

# Run tests with coverage
npm run test:coverage

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```


### Using the Application
1. Start the development server with `npm run dev`
2. Open your browser to `http://localhost:5173`
3. Enter a whole number in the input field
4. Click "Fizz It" to see the FizzBuzz result

## Architecture Overview

This project demonstrates clean architecture principles applied to a simple React application.

### Project Structure
```
src/
├── domain/              # Business logic layer
│   ├── fizzbuzz.js     # Core FizzBuzz algorithm
│   └── inputValidator.js # Input validation logic
├── test/               # Test files (mirrors src structure)
│   └── domain/
│       ├── fizzbuzz.test.js
│       └── inputValidator.test.js
├── App.jsx             # Main React component
└── main.jsx           # Application entry point
```


### Architectural Decisions

#### 1. **Domain-Driven Design (DDD)**
- **Why**: Separates business logic from UI concerns, making the code more maintainable and testable
- **Implementation**: Core FizzBuzz logic lives in `/domain` folder, independent of React
- **Benefits**: Business rules can be tested in isolation and potentially reused in different UI frameworks

#### 2. **Single Responsibility Principle (SRP)**
- **`isNumeric()`**: Checks if input can be converted to a number
- **`isWholeNumber()`**: Validates whole number format using regex
- **`validateInput()`**: Combines both checks for our specific business rule
- **Why**: Each function has one reason to change, making the code more composable and reusable

#### 3. **Functional Programming Approach**
- **FizzBuzz Algorithm**: Uses `reduce()` with configurable rules array
- **Benefits**: 
  - Easily extensible (adding "7: Woof" requires just adding `[7, 'Woof']`)
  - Eliminates nested if/else statements
  - More declarative and readable

#### 4. **Trust-Based Error Handling**
- **Decision**: No defensive programming in `fizzBuzz()` function
- **Rationale**: Input is pre-validated, so adding duplicate error handling would violate DRY principle
- **Benefits**: Cleaner code, clear contracts between layers

#### 5. **Modern Tooling & Best Practices**
- **Vite**: Fast development server and build tool
- **Vitest**: Modern testing framework with great DX
- **ESLint**: Code quality and consistency
- **Tailwind CSS**: Utility-first styling for rapid UI development
- **ES6 Modules**: Modern JavaScript module system

#### 6. **Test Structure**
- **Mirror Strategy**: Test folder structure mirrors source structure
- **Comprehensive Coverage**: Tests cover both happy path and edge cases
- **Unit Testing**: Each function tested in isolation

### Design Philosophy

This implementation prioritizes:
- **Maintainability** over brevity
- **Composability** over monolithic functions  
- **Clear contracts** over defensive programming
- **Testability** as a first-class concern

The result is a codebase that's easy to understand, extend, and maintain while demonstrating professional software development practices.