# UI Component Library

This package contains reusable React components (e.g., Dropdown, Search) for use in multiple projects without code duplication.

## Getting Started

### 1. Install Dependencies

```
npm install
```

### 2. Build the Package (if using TypeScript)

Add this to your `package.json` scripts if not present:

```
"build": "tsc"
```

Then run:
```
npm run build
```

### 3. Link the Package Globally (for local development only)

```
npm link
```

### 4. Link the Package in Your Local Project (for local development only)

In your other project's root directory:

```
npm link ui
```
*(Replace `ui` with your actual package name if different.)*

---

## Using This Package in Any Project (Recommended for Deployment/Production)

### 1. Check Your Package Name
- Open `package.json` in this package.
- Find the `"name"` field. Example:
  ```json
  "name": "ui"
  ```
- If you want to publish to npm, use a unique name (e.g., `mono-ui` or `vaishnavi-ui`).

### 2. Install the Package in Your Project

#### A. If published to npm:
```
npm install your-package-name
```
*(Replace `your-package-name` with the value from your `package.json`)*

#### B. If installing directly from GitHub:
```
npm install git+https://github.com/vaishnavig57/mono-ui.git
```

---

## 📦 How to Publish to npm (Quick Steps)

**1. Create an npm account:**
- https://www.npmjs.com/signup

**2. Login in your terminal:**
```
npm login
```

**3. Make sure your package name is unique in `package.json`.**

**4. Build your package:**
```
npm run build
```

**5. Bump the version if needed in `package.json`.**

**6. Publish:**
```
npm publish --access public
```

**7. Check your package:**
- https://www.npmjs.com/package/your-package-name

**8. Install in any project:**
```
npm install your-package-name
```

---

## 🚀 How to Use This Package in a New Project

**1. Install the package:**
```
npm install your-package-name
```
_Replace `your-package-name` with the name in your `package.json` (e.g., `vaishnavi-ui`)._

**2. Import components in your code:**
```jsx
import { Search, Dropdown } from 'your-package-name';

function App() {
  return (
    <div>
      <Search placeholder="Search..." />
      <Dropdown options={['Option 1', 'Option 2']} />
    </div>
  );
}
```

**3. Build and run your project as usual.**

---

## 📦 How to Install This Package from GitHub (No npm Publish Required)

**If your package.json is at the root of the repo:**
```sh
npm install git+https://github.com/vaishnavi57/mono-ui.git
```
Or in your `package.json`:
```json
"dependencies": {
  "mono-ui": "git+https://github.com/vaishnavi57/mono-ui.git"
}
```

**If your package is in a subdirectory (e.g., packages/ui):**
```sh
npm install https://gitpkg.now.sh/vaishnavi57/mono-ui/packages/ui
```
Or in your `package.json`:
```json
"dependencies": {
  "mono-ui": "https://gitpkg.now.sh/vaishnavi57/mono-ui/packages/ui"
}
```

**For private repos:**
- Add your GitHub token to `.npmrc`:
  ```
  //github.com/:_authToken=YOUR_GITHUB_TOKEN
  ```
- Or use the token in the URL (not recommended):
  ```sh
  npm install git+https://<TOKEN>@github.com/vaishnavi57/mono-ui.git
  ```

**Required changes:**
- Make sure your build output (e.g., `dist/`) is committed to GitHub, or add a `prepare` script in your `package.json`:
  ```json
  "scripts": {
    "prepare": "npm run build"
  }
  ```
- Ensure all peer dependencies (like `react`, `react-icons`, etc.) are installed in the consuming project.

**After install, import components as:**
```js
import { Search, Dropdown, LoginForm } from 'mono-ui';
```
_Replace 'mono-ui' with the name in your package.json if different._

---

## Notes
- Use `npm link` only for local development. For deployment/production, always use `npm install` from npm or GitHub.
- Rebuild (`npm run build`) your UI package after making changes to see updates in your linked project.
- Restart your local project's dev server after linking or installing.
- If you encounter issues, check your package name and import paths. 

---

## 🚀 How to Publish to GitHub Packages and Use in Another Project

### 1. Publish Your Package to GitHub Packages

1. Make sure your `package.json` has:
   ```json
   "name": "@vaishnavi57/mono-ui"
   "publishConfig": { "registry": "https://npm.pkg.github.com" }
   ```
2. In your `packages/ui/.npmrc` file, add:
   ```
   @vaishnavi57:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   ```
   *(Replace `YOUR_PERSONAL_ACCESS_TOKEN` with your real GitHub token)*
   
   **Important:** Add `.npmrc` to your `.gitignore` file so you don't accidentally commit your personal access token to your repository.
3. Run these commands in `packages/ui`:
   ```sh
   npm run build
   npm publish
   ```

---

### 2. Use the Package in Another Project

> **Note:** You do NOT need to use `git+` in the package name or install command for GitHub Packages. Just use the npm package name as shown below.

1. In your other project's `.npmrc` file, add:
   ```
   @vaishnavi57:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
   ```
   
   **Important:** Add `.npmrc` to your `.gitignore` file in your other project as well.
2. Install the package:
   ```sh
   npm install @vaishnavi57/mono-ui
   ```
3. Import and use components:
   ```js
   import { Search, Dropdown, ContactForm } from '@vaishnavi57/mono-ui';
   ```

--- 