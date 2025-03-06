# React Native Web Components

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%23007ACC.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/VitBenton88/Native-Web-Components/actions)

**A collection of accessible React components built with native HTML5 elements for modern and performant web applications.**

## Description

This repository contains a set of React components meticulously crafted using semantic HTML5 elements. The goal is to provide lightweight, performant, and inherently accessible UI building blocks that seamlessly integrate into any React project. Leveraging native HTML5 ensures optimal browser rendering and reduces reliance on heavy JavaScript abstractions, resulting in a faster and more user-friendly experience.

## Key Features

*   **Semantic HTML5:** Components are built directly upon elements like `<dialog>`, `<details>`, `<summary>`, etc., ensuring inherent accessibility and SEO benefits.
*   **Lightweight and Performant:** Minimal JavaScript overhead for fast rendering and optimal performance.
*   **TypeScript-Powered:** Developed with TypeScript for enhanced type safety, maintainability, and developer experience.  Leverages modern React patterns and best practices.
*   **Accessible by Default:** Focus on accessibility from the ground up, adhering to WCAG guidelines.
*   **Easy to Customize:** Simple and intuitive API for easy integration and customization within your React application.
*   **Comprehensive Unit Tests:** Rigorously tested with Jest and React Testing Library to ensure reliability and prevent regressions.

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