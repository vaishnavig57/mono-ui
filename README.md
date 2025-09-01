# Common UI Monorepo

A monorepo containing reusable React UI components for sharing across multiple projects.

## 📁 Structure

```
common-ui/
├── packages/ui/                     # UI Component Library
│   ├── src/components/              # React Components
│   ├── dist/                        # Built files
│   └── package.json                 # Package config
└── README.md                        # This file
```

## 🚀 Quick Setup

```bash
# 1. Create structure
mkdir common-ui && cd common-ui
mkdir -p packages/ui/src/components

# 2. Initialize package
cd packages/ui
npm init -y
npm install --save-dev typescript @types/react @types/react-dom
npm install --save react react-dom react-icons

# 3. Configure package.json
# Set name: "@your-username/mono-ui"
# Add build script: "build": "tsc"
# Add publishConfig for GitHub Packages

# 4. Create tsconfig.json
npx tsc --init
# Configure: outDir: "./dist", declaration: true, jsx: "react-jsx"
```

## 📦 Publishing & Usage

### GitHub Packages (Recommended)

**Publish:**
```bash
# 1. Set up .npmrc
echo "@your-username:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT" >> .npmrc

# 2. Build and publish
cd packages/ui
npm run build
npm version patch
npm publish
```

**Use in other projects:**
```bash
# 1. Set up .npmrc in consumer project
echo "@your-username:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT" >> .npmrc

# 2. Install and use
npm install @your-username/mono-ui
```

```jsx
import { Search, Dropdown, ContactForm } from '@your-username/mono-ui';

function App() {
  return (
    <div>
      <Search value="" onChange={(v) => {}} placeholder="Search..." />
      <Dropdown options={[{label: 'Option 1', value: '1'}]} value="" onChange={(v) => {}} />
      <ContactForm onSubmit={(data) => console.log(data)} />
    </div>
  );
}
```

### Public npm

**Publish:**
```bash
npm login
npm run build
npm version patch
npm publish --access public
```

**Use:**
```bash
npm install your-package-name
```

## 🔧 Local Development

### Option 1: npm link (Active development)
```bash
cd packages/ui && npm link
cd your-test-project && npm link @your-username/mono-ui
```

### Option 2: npm pack (Test specific versions)
```bash
cd packages/ui
npm run build
npm pack  # Creates vaishnavi57-mono-ui-1.0.3.tgz
```

**Use tarball:**
```bash
npm install /path/to/vaishnavi57-mono-ui-1.0.3.tgz
```

**Or in package.json:**
```json
{
  "dependencies": {
    "@vaishnavi57/mono-ui": "file:../common-ui/packages/ui/vaishnavi57-mono-ui-1.0.3.tgz"
  }
}
```

### Option 3: file: protocol
```json
{
  "dependencies": {
    "@vaishnavi57/mono-ui": "file:../common-ui/packages/ui"
  }
}
```

## 📦 About .tgz Files

The `.tgz` file is a **compressed package** containing your built files. It's created with `npm pack` and useful for:
- Testing specific versions before publishing
- Sharing with team members
- Offline installation
- CI/CD pipelines

## 🔐 GitHub Token Setup

1. GitHub Settings → Developer settings → Personal access tokens
2. Generate token with permissions: `read:packages`, `write:packages`, `repo`
3. Use in `.npmrc` files

## 📝 Quick Notes

- Add `.npmrc` to `.gitignore` (contains tokens)
- Install peer deps: `react`, `react-dom`, `react-icons`
- Always `npm run build` before publishing
- Use semantic versioning: `npm version patch/minor/major`
