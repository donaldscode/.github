# Donald's GitHub Profile Repository

This is a special GitHub repository that serves as Donald Filimon's GitHub profile repository. The repository contains multiple components including a demo application with educational bugs, workspace configurations, and profile information.

## Project Description

The repository serves dual purposes:
1. **GitHub Profile**: Contains the profile README that appears on Donald's GitHub profile page
2. **Educational Demo**: Includes a Node.js/Express application (`buggy-app.js`) with intentional bugs for educational purposes, demonstrating common programming issues like logic errors, performance problems, and security vulnerabilities

## File Structure Overview

```
.github/
├── profile/README.md              # GitHub profile README (appears on profile)
├── buggy-app.js                   # Demo Express app with educational bugs
├── package.json                   # Node.js project configuration
├── package-lock.json              # Dependency lock file
├── BUG_FIXES_REPORT.md           # Detailed report of bugs and their fixes
├── LICENSE                        # Project license
├── README.md                      # Main repository README
└── donald-company-workspace/      # Workspace with various outputs and tools
    ├── outputs/                   # Generated content (careers, blogs, etc.)
    ├── prompts/                   # Prompt templates
    ├── scripts/                   # Utility scripts
    └── web/                       # Next.js web application
```

## Running the Demo Application

The repository includes a Node.js Express application for educational purposes:

```bash
# Install dependencies
npm install

# Start the application
npm start
# or
node buggy-app.js

# Run tests (if test.js exists)
npm test
```

The application runs on port 3000 by default and provides API endpoints:
- `GET /max?numbers=1,2,3,4,5` - Find maximum number in array
- `GET /duplicates?arr=a,b,c,a` - Check for duplicates in array  
- `GET /user/:id` - Get user by ID (demonstrates SQL injection vulnerability)

## Development Notes

- The `buggy-app.js` file contains intentionally buggy code for educational purposes
- See `BUG_FIXES_REPORT.md` for detailed analysis of the bugs and their fixes
- The `donald-company-workspace/` directory contains various generated content and a Next.js web application
- This is a GitHub profile repository, so changes to `profile/README.md` will appear on the GitHub profile

## Additional Information

The repository demonstrates common software development issues including off-by-one errors, performance optimization opportunities, and security vulnerabilities like SQL injection. It serves as both a personal GitHub profile and an educational resource for understanding and fixing common programming bugs.