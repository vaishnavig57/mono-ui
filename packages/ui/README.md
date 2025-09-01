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
- Ensure the `"name"` field is scoped for GitHub Packages, for example:
  ```json
  "name": "@vaishnavi57/mono-ui"
  ```

### 2. Install via GitHub Packages (works for private repos)

1) In your consuming project's root, create or update `.npmrc`:
```
@vaishnavi57:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```
2) Install the package (and peer deps if needed):
```
npm install @vaishnavi57/mono-ui
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

**1. Authenticate and install (GitHub Packages):**
```
@vaishnavi57:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```
Then:
```
npm install @vaishnavi57/mono-ui
```

**2. Import components in your code:**
```jsx
import { Search, Dropdown, ContactForm } from '@vaishnavi57/mono-ui';

function App() {
  return (
    <div>
      <Search value="" onChange={() => {}} placeholder="Search..." />
      <Dropdown options={[{ label: 'Option 1', value: '1' }]} value="" onChange={() => {}} />
      <ContactForm onSubmit={(data) => console.log(data)} />
    </div>
  );
}
```

**3. Build and run your project as usual.**

---

## 📦 Install from GitHub Packages (Preferred)

1) Add `.npmrc` in both publisher and consumer projects:
```
@vaishnavi57:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```
2) Publish from this package (run in `packages/ui`):
```sh
npm run build
npm version patch
npm publish
```
3) Install in any project:
```sh
npm install @vaishnavi57/mono-ui
```
4) Import:
```js
import { Search, Dropdown, ContactForm } from '@vaishnavi57/mono-ui';
```

---

## Notes
- Prefer GitHub Packages for private repos. Avoid `git+https://` installs for monorepos/private repos.
- Ensure peer deps are installed in the consumer app: `react`, `react-dom`, `react-icons`.
- For local dev, you can use `npm link` or `npm pack` to install the generated tarball.
- If installs fail with 401/404 in CI, your token is missing `read:packages` or repo access.

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
   npm version patch
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