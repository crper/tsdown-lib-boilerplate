# TypeScript 库开发模板

这是一个现代化 TypeScript 库开发模板，旨在帮助您快速启动 TypeScript 库项目。它提供了一系列基础函数作为核心逻辑示例。

## 核心技术栈

本项目集成了以下关键技术，为您提供高效、高质量的开发体验：

- 📦 [tsdown](https://github.com/rolldown/tsdown)：基于 Rust 的极速 TypeScript 编译和打包工具。
- 🔍 [oxlint](https://github.com/oxc-project/oxc)：基于 Rust 的极速代码 linting 工具，确保代码质量。
- 💅 [prettier](https://github.com/prettier/prettier)：用于代码格式化，统一代码风格。
- 📝 [commitlint](https://github.com/conventional-changelog/commitlint)：用于规范 Git 提交信息。
- ⚡️ [vitest](https://vitest.dev/)：用于单元测试和性能基准测试。
- 🚀 [tsx](https://github.com/privatenumber/tsx)：用于直接运行 TypeScript 文件。
- 🔗 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)：用于管理 Git 钩子。

## 为什么选择这个模板？

- **开箱即用**：集成了现代 TypeScript 项目所需的关键工具链，减少了初始设置的烦恼。
- **代码质量**：内置 `oxlint` 和 `prettier`，确保代码风格统一且无潜在问题。
- **测试完备**：`vitest` 同时支持单元测试和性能基准测试，帮助您构建健壮且高效的代码。
- **协作友好**：`commitlint` 和 `simple-git-hooks` 规范提交信息，`CONTRIBUTING.md` 指导贡献流程，方便团队协作。
- **易于扩展**：项目结构清晰，核心逻辑与工具配置分离，便于根据需求进行定制和扩展。

## 环境要求

为了确保最佳的开发体验和兼容性，本项目推荐以下环境配置：

- **Node.js**: `>=18.0.0` (推荐使用 [Node.js 20 LTS](https://nodejs.org/en/download/))。
- **pnpm**: `>=10.x` (推荐，也可使用 npm/yarn)。
- **TypeScript**: `>=5.x`。

## 快速开始

基于此模板启动新项目非常简单：

1.  **使用 GitHub 模板**：
    点击 GitHub 页面上的 "Use this template" 按钮，创建一个新的仓库。
2.  **克隆仓库**：
    ```bash
    git clone <你的新仓库地址>
    cd <你的项目目录>
    ```
3.  **安装依赖**：
    ```bash
    pnpm install # 推荐
    # 或者 npm install / yarn install
    ```
4.  **运行示例**：
    ```bash
    pnpm run:example
    ```

## 使用示例

以下是一个简单的示例，展示如何使用本模板中提供的 `greet` 函数：

```typescript
import { greet } from './src/index'

const message = greet('World')
console.log(message) // 输出: Hello, World!
```

## 可用脚本

在 `package.json` 中定义了以下脚本，你可以通过 `pnpm <script-name>` (或 `npm run <script-name> / yarn <script-name>`) 来运行：

- **`pnpm test`**
  运行单元测试。

- **`pnpm test:coverage`**
  运行单元测试并生成代码覆盖率报告。

- **`pnpm lint`**
  运行 `oxlint` 进行代码风格检查。

- **`pnpm build`**
  使用 `tsdown` 编译 TypeScript 代码到 `dist` 目录。

- **`pnpm bench`**
  运行性能基准测试。

- **`pnpm run:example`**
  运行 `examples/01-basic-example.ts` 示例。

- **`pnpm format`**
  使用 `prettier` 格式化项目中的所有文件。

- **`pnpm prepare`**
  安装 Git 钩子 (在 `pnpm install` 后自动运行)。

- **`pnpm changelog`**
  生成增量变更日志。此命令会根据您的 Git 提交历史，在 `CHANGELOG.md` 文件的顶部追加新的变更日志。如果文件不存在，会自动创建。

- **`pnpm changelog:full`**
  生成完整的项目变更日志。此命令会清除 `CHANGELOG.md` 的内容（如果文件已存在），然后从项目历史的起点开始生成所有变更记录。

## 目录结构

```
.
├── .editorconfig           # 编辑器配置
├── .git/                   # Git 版本控制目录
├── .gitignore              # Git 忽略文件配置
├── .oxlintrc.json          # oxlint 配置文件
├── .prettierrc.json        # Prettier 格式化配置
├── commitlint.config.js    # Commitlint 提交信息规范配置
├── CONTRIBUTING.md         # 贡献指南
├── coverage/               # 代码覆盖率报告
├── dist/                   # 编译输出目录
├── examples/               # 使用示例
│   └── 01-basic-example.ts # 运行示例文件
├── LICENSE                 # 许可证文件
├── package.json            # 项目依赖和脚本配置
├── pnpm-lock.yaml          # pnpm 锁定文件
├── README.md               # 项目自述文件
├── src/                    # 源代码目录
│   └── index.ts            # 核心逻辑 (包含 greet, add, capitalize 等函数)
├── tests/                  # 测试文件目录
│   ├── benchmarks/         # 性能基准测试示例
│   │   └── example.bench.ts# 基准测试示例文件
│   └── index.test.ts       # 单元测试示例文件
├── tsconfig.json           # TypeScript 配置
├── tsdown.config.ts        # tsdown 配置文件
└── vitest.config.ts        # Vitest 测试配置
```

## 贡献

欢迎提出改进建议或提交 PR。请参阅我们的 [贡献指南](CONTRIBUTING.md) 以了解详细信息，并遵循 [Angular 提交消息规范](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit) 提交您的更改，以保持提交历史的整洁和一致性。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。

---

希望这个脚手架能帮助你快速开始项目！
