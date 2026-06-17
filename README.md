# Native Web Components

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%23007ACC.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/VitBenton88/Native-Web-Components/actions)

**A collection of lightweight React components built on native HTML5 elements to create intuitive and accessible user interfaces. Written in TypeScript for maintainability, with unit tests for reliability.**

[Live Demo](https://vitbenton88.github.io/Native-Web-Components/)

## Description

This repository contains a set of React components meticulously crafted using semantic HTML5 elements. The goal is to provide lightweight, performant, and inherently accessible UI building blocks that seamlessly integrate into any React project. Leveraging native HTML5 ensures optimal browser rendering and reduces reliance on heavy JavaScript abstractions, resulting in a faster and more user-friendly experience.

## Components

- **CodeBlock** — syntax-highlighted code display via `<pre>`/`<code>`
- **DatePicker** — accessible date input wrapping `<input type="date">`
- **DetailsDropdown** — collapsible content via `<details>`/`<summary>`
- **Dialog** — modal and non-modal dialogs via `<dialog>`
- **FileDrop** — drag-and-drop file upload zone
- **Meter** — gauge display via `<meter>`
- **Picture** — responsive images via `<picture>`/`<source>`
- **ProgressBar** — progress indicator via `<progress>`
- **Range** — slider input via `<input type="range">` with optional datalist tick marks

## Key Features

*   **Semantic HTML5:** Components are built directly upon elements like `<dialog>`, `<details>`, `<summary>`, etc., ensuring inherent accessibility and SEO benefits.
*   **Lightweight and Performant:** Minimal JavaScript overhead for fast rendering and optimal performance.
*   **TypeScript-Powered:** Developed with TypeScript for enhanced type safety, maintainability, and developer experience.  Leverages modern React patterns and best practices.
*   **Accessible by Default:** Focus on accessibility from the ground up, adhering to WCAG guidelines.
*   **Easy to Customize:** Simple and intuitive API for easy integration and customization within your React application.
*   **Comprehensive Unit Tests:** Rigorously tested with Vitest and React Testing Library to ensure reliability and prevent regressions.

## Usage

```js
import { Dialog } from 'your-own-directory'; // Replace
import React from 'react';

const MyComponent = () => {
  return (
    <Dialog isOpen={true} onClose={() => console.log("Dialog closed!")}>
      <h2>My Dialog Title</h2>
      <p>This is the content of my dialog.</p>
    </Dialog>
  );
};
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes comprehensive unit tests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.

## Author

Vit Benton - [https://github.com/VitBenton88](https://github.com/VitBenton88) - [vit@vitbenton.com](mailto:vit@vitbenton.com)

[LinkedIn](https://www.linkedin.com/in/vit-benton/)