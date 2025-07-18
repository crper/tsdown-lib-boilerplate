module.exports = {
  // 对 TypeScript 和 JavaScript 文件进行格式化、lint 和类型检查
  '*.{ts,tsx}': ['prettier --write', 'oxlint --fix', () => 'tsc --noEmit'],
  '*.{js,mjs,cjs}': ['prettier --write', 'oxlint --fix'],
  // 对其他文件类型进行格式化
  '*.{json,md,yml,yaml}': ['prettier --write'],
  // 当源码文件变更时运行测试
  'src/**/*.{ts,tsx}': () => 'pnpm test',
  // 当测试文件变更时也运行测试
  'tests/**/*.{ts,tsx}': () => 'pnpm test',
}
