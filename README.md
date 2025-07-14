English | [简体中文](README_zh-CN.md)

# TypeScript Library Boilerplate

This is a modern TypeScript library development boilerplate designed to help you quickly start your TypeScript library projects. It provides a series of basic functions as core logic examples.

## Core Technology Stack

This project integrates the following key technologies to provide you with an efficient, high-quality development experience:

- 📦 [tsdown](https://github.com/rolldown/tsdown): An extremely fast TypeScript compilation and bundling tool based on Rust.
- 🔍 [oxlint](https://github.com/oxc-project/oxc): An extremely fast code linting tool based on Rust, ensuring code quality.
- 💅 [prettier](https://github.com/prettier/prettier): Used for code formatting to unify code style.
- 📝 [commitlint](https://github.com/conventional-changelog/commitlint): Used to standardize Git commit messages.
- ⚡️ [vitest](https://vitest.dev/): Used for unit testing and performance benchmarking.
- 🚀 [tsx](https://github.com/privatenumber/tsx): Used to directly run TypeScript files.
- 🔗 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks): Used to manage Git hooks.

## Why Choose This Boilerplate?

- **Out-of-the-box**: Integrates key toolchains required for modern TypeScript projects, reducing initial setup hassle.
- **Code Quality**: Built-in `oxlint` and `prettier` ensure consistent code style and no potential issues.
- **Comprehensive Testing**: `vitest` supports both unit testing and performance benchmarking, helping you build robust and efficient code.
- **Collaboration Friendly**: `commitlint` and `simple-git-hooks` standardize commit messages, and `CONTRIBUTING.md` guides the contribution process, facilitating team collaboration.
- **Easy to Extend**: Clear project structure, with core logic separated from tool configurations, making it easy to customize and extend as needed.

## Environment Requirements

To ensure the best development experience and compatibility, this project recommends the following environment configurations:

- **Node.js**: `>=18.0.0` (Node.js 20 LTS recommended).
- **pnpm**: `>=10.x` (Recommended, npm/yarn can also be used).
- **TypeScript**: `>=5.x`.

## Quick Start

Starting a new project based on this boilerplate is very simple:

1.  **Use GitHub Template**:
    Click the "Use this template" button on the GitHub page to create a new repository.
2.  **Clone the Repository**:
    ```bash
    git clone <your-new-repository-address>
    cd <your-project-directory>
    ```
3.  **Install Dependencies**:
    ```bash
    pnpm install # Recommended
    # Or npm install / yarn install
    ```
4.  **Run Example**:
    ```bash
    pnpm run:example
    ```

## Usage Example

Below is a simple example demonstrating how to use the `greet` function provided in this boilerplate:

```typescript
import { greet } from './src/index'

const message = greet('World')
console.log(message) // Output: Hello, World!
```

## Available Scripts

The following scripts are defined in `package.json`, which you can run via `pnpm <script-name>` (or `npm run <script-name> / yarn <script-name>`):

- **`pnpm test`**
  Runs unit tests.

- **`pnpm test:coverage`**
  Runs unit tests and generates a code coverage report.

- **`pnpm lint`**
  Runs `oxlint` for code style checking.

- **`pnpm build`**
  Compiles TypeScript code to the `dist` directory using `tsdown`.

- **`pnpm bench`**
  Runs performance benchmarks.

- **`pnpm run:example`**
  Runs the `examples/01-basic-example.ts` example.

- **`pnpm format`**
  Formats all files in the project using `prettier`.

- **`pnpm prepare`**
  Installs Git hooks (automatically runs after `pnpm install`).

- **`pnpm changelog`**
  Generates an incremental changelog. This command appends new changelogs to the top of the `CHANGELOG.md` file based on your Git commit history. If the file does not exist, it will be created automatically.

- **`pnpm changelog:full`**
  Generates a complete project changelog. This command clears the content of `CHANGELOG.md` (if it exists) and then generates all change records from the beginning of the project history.

## Directory Structure

```
.
├── .editorconfig           # Editor configuration
├── .git/                   # Git version control directory
├── .gitignore              # Git ignore file configuration
├── .oxlintrc.json          # oxlint configuration file
├── .prettierrc.json        # Prettier formatting configuration
├── commitlint.config.js    # Commitlint commit message specification configuration
├── CONTRIBUTING.md         # Contribution guide
├── coverage/               # Code coverage report
├── dist/                   # Compiled output directory
├── examples/               # Usage examples
│   └── 01-basic-example.ts # Example file to run
├── LICENSE                 # License file
├── package.json            # Project dependencies and script configuration
├── pnpm-lock.yaml          # pnpm lock file
├── README.md               # Project README file
├── src/                    # Source code directory
│   └── index.ts            # Core logic (includes greet, add, capitalize functions)
├── tests/                  # Test files directory
│   ├── benchmarks/         # Performance benchmark examples
│   │   └── example.bench.ts# Benchmark example file
│   └── index.test.ts       # Unit test example file
├── tsconfig.json           # TypeScript configuration
├── tsdown.config.ts        # tsdown configuration file
└── vitest.config.ts        # Vitest test configuration
```

## Contributing

Welcome to propose improvements or submit PRs. Please refer to our [Contribution Guide](CONTRIBUTING.md) for details, and follow the [Angular Commit Message Convention](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit) to submit your changes to keep the commit history clean and consistent.

## License

This project is licensed under the [MIT License](LICENSE).

---

Hope this boilerplate helps you quickly start your project!
