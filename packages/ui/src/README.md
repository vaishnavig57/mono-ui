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

### 3. Link the Package Globally

```
npm link
```

### 4. Link the Package in Your Local Project

In your other project's root directory:

```
npm link ui
```
*(Replace `ui` with your actual package name if different.)*

### 5. Import and Use Components

In your local project, import components like this:

```
import { Dropdown, Search } from 'ui/components';
```

#### Example Usage (React)

```
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

## Notes
- Rebuild (`npm run build`) your UI package after making changes to see updates in your linked project.
- Restart your local project's dev server after linking.
- If you encounter issues, check your package name and import paths. 