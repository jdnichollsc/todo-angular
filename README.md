# TodoAngular - Frontend Code Challenge

A Todo application built with Angular and Nx workspace, demonstrating modern Angular development practices and state management.

## Features

- ✨ Todo item management (create, read, update, delete)
- 📅 Due date tracking with past-due marking
- 🔍 Search functionality
- 💾 Local storage persistence
- 🎯 Smart state management with NgRx
- 🏗️ Smart containers and presentational components architecture

## Development Setup

To run the development server:

```sh
npx nx serve web
```

To create a production build:

```sh
npx nx build web
```

## Project Structure

This project uses Nx workspace and follows a modular architecture:

- `apps/web`: Main application
- `libs/ui`: Reusable UI components
- `libs/state`: State management and storage services
- `libs/shared`: Shared utilities and interfaces

## Generate New Projects

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

## Technical Stack

- **Framework**: Angular
- **State Management**: NgRx
- **Storage**: LocalStorage
- **Build Tool**: Nx
- **Architecture**: Smart Containers/Dumb Components
- **Styling**: TailwindCSS/DaisyUI

## Development Guidelines

- Follow functional programming principles
- Maintain separation between smart containers and presentational components
- Write clean, testable code
- Follow Angular best practices and style guide

## Available Scripts

```sh
# Serve the application
npx nx serve web

# Run tests
npx nx test web

# Build for production
npx nx build web

# Generate new components/services
npx nx g @nx/angular:component
npx nx g @nx/angular:service
```

## Project Requirements

This project was developed as part of a code challenge with the following requirements:

1. ✅ Todo list functionality (title, due date, completed status)
2. ✅ Add/remove capabilities
3. ✅ Search functionality
4. ✅ Local storage persistence
5. ✅ Past due marking feature

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Learn More

- [Angular Documentation](https://angular.dev)
- [NgRx Documentation](https://ngrx.io)
- [Nx Documentation](https://nx.dev)
