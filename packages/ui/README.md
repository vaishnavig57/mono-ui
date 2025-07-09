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

### 3. Import and Use Components

**Import the Search component:**
```tsx
import { Search } from 'ui/components'; // Replace 'ui' with your package name if different
```

**Example Usage:**
```tsx
import React, { useState } from 'react';
import { Search } from 'ui/components';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <h2>Search Example</h2>
      <Search
        value={searchValue}
        onChange={setSearchValue}
        placeholder="Type to search..."
      />
      <p>Current value: {searchValue}</p>
    </div>
  );
}

export default App;
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

**Troubleshooting:**
- If you get a 403 error, the package name is already taken or you are not the owner.
- If you get an auth error, run `npm login` and try again.
- Always use a unique package name for your own packages.

## Notes
- Use `npm link` only for local development. For deployment/production, always use `npm install` from npm or GitHub.
- Rebuild (`npm run build`) your UI package after making changes to see updates in your linked project.
- Restart your local project's dev server after linking or installing.
- If you encounter issues, check your package name and import paths. 