# 1. Project Name
**Currency Converter**

---

# 2. Abstract

The Currency Converter is a real-time currency exchange application built with modern React that enables users to instantly convert between multiple global currencies. The application provides seamless, automatic conversion logic triggered by user input changes, leveraging the ExchangeRate-API for live exchange rate data. Key technical implementations include reactive state management using React Hooks (useState, useEffect), asynchronous API calls with Axios, automatic debouncing through useEffect optimization patterns, and comprehensive error handling with user feedback. The application features a responsive, modern UI built entirely with Tailwind CSS utility classes, delivering a professional user experience optimized for both desktop and mobile platforms with zero external component libraries.

---

# 3. Key Features

- **Real-time Currency Conversion** — Automatic conversion triggered whenever the amount or currency selection changes, providing instant results without manual button clicks
- **12+ Currency Support** — Supports major global currencies including USD, EUR, GBP, INR, JPY, CAD, CHF, CNY, HKD, NZD, PKR, and AUD
- **Dual Currency Selection** — Independent dropdown selectors for source and destination currencies with comprehensive currency lists
- **Live Exchange Rates** — Integrates with ExchangeRate-API to fetch current, accurate exchange rates for conversions
- **Loading State Management** — Displays loading indicator during API requests to improve user experience and prevent duplicate conversions
- **Error Handling** — Captures and displays API errors to inform users of failed conversion attempts
- **Responsive Design** — Fully responsive layout optimized for mobile, tablet, and desktop devices with adaptive spacing and typography
- **Result Display Panel** — Shows conversion results with clear currency symbols and formatted output in a highlighted information box
- **Input Validation** — Ensures only positive numeric values are processed for conversion

---

# 4. Tech Stack

**Frontend Framework**
- React 19.2.0 (latest version with modern hooks and performance improvements)

**Build Tool & Development**
- Vite 7.3.1 (ultra-fast build tool with Hot Module Replacement)
- @vitejs/plugin-react 5.1.1 (React support for Vite with Babel transpilation)

**Styling & CSS**
- Tailwind CSS 4.1.18 (utility-first CSS framework)
- @tailwindcss/vite 4.1.18 (Vite integration for Tailwind CSS)

**State Management**
- React Hooks (useState, useEffect) — No external state management library; component-level state for amount, currencies, converted results, loading, and error states

**API & HTTP Client**
- Axios 1.13.5 (HTTP client for API requests)

**Code Quality & Linting**
- ESLint 9.39.1 (JavaScript linting and code consistency)
- eslint-plugin-react-hooks 7.0.1 (React Hooks best practices enforcement)
- eslint-plugin-react-refresh 0.4.24 (Vite React Refresh optimization)

**Data Management**
- Local JSON file (Currencies.json) for static currency list data and metadata

**Development & Type Support**
- @types/react 19.2.7 and @types/react-dom 19.2.3 (JSX support and type inference)

**Performance Optimizations**
- Automatic dependency-based re-execution via useEffect (converts on amount/currency changes)
- Conditional rendering for results (only renders conversion panel when data exists)
- Loading state to prevent multiple simultaneous API requests

---

# 5. APIs / External Resources Used

**ExchangeRate-API**
- **Name**: ExchangeRate-API (Free Tier)
- **URL**: `https://v6.exchangerate-api.com/v6/{API_KEY}/pair/{from}/{to}/{amount}`
- **Purpose**: Provides real-time currency exchange rates
- **Implementation**: Returns JSON response with `conversion_result` field containing the converted amount

**Static Data**
- **Currencies.json**: Local JSON file containing array of 12 currency objects with `currency` code and `currencyName` for dropdown population

---

# 6. Authentication / Authorization

**No authentication/authorization implemented.** The application is a public utility with no user login, protected routes, or session management. The ExchangeRate-API key is hardcoded in the client-side code, which poses a security risk in production environments. For production deployment, the API key should be moved to environment variables and called through a backend proxy to prevent key exposure.

---

# 7. Performance Optimizations

- **Automatic Conversion via useEffect Dependency Array** — Conversion is triggered only when amount, fromAmount, or toAmount changes, preventing unnecessary API calls
- **Loading State Flag** — Prevents multiple simultaneous API requests by setting loading state during fetch operations
- **Conditional Rendering** — Results and error messages render only when relevant data exists, reducing DOM operations
- **Direct API Calls** — Uses Axios for minimal overhead; no caching layer in current implementation
- **Optimized Re-renders** — Component uses React 19's optimizations; state setters are memoized by default

---

# 8. Project Architecture

```
currency-convertor/
├── src/
│   ├── components/
│   │   └── Conveter.jsx          # Main currency converter component (handles UI, state, conversion logic)
│   ├── APIs/
│   │   ├── api.jsx               # Axios instance and API call function (currencyConverter)
│   │   └── Currencies.json        # Static list of 12 supported currencies
│   ├── App.jsx                   # Root component (renders Conveter)
│   ├── main.jsx                  # React DOM entry point
│   ├── App.css                   # Global app styles
│   └── index.css                 # Base CSS resets and variables
├── public/                       # Static assets
├── vite.config.js               # Vite configuration with React and Tailwind plugins
├── package.json                 # Dependencies and build scripts
└── eslint.config.js             # ESLint configuration

**Key Architectural Decisions:**
- **Monolithic Component**: Single Conveter component handles all conversion logic, UI rendering, and state management
- **Separated API Layer**: API calls isolated in api.jsx for maintainability and reusability
- **Static Data**: Currency metadata stored locally in JSON to avoid additional API calls
- **Utility-First Styling**: All styling via Tailwind CSS utility classes; no custom CSS needed (except base styling)
- **No Complex State Management**: Direct React Hooks suffice for the application's simple state requirements
```

---

# 9. Deployment URL

Not currently deployed. Application is in development phase.

---

# 10. GitHub Repository URL

Not available. This is a local training project.

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## Environment Setup (Optional for Production)
If deploying to production, create a `.env` file:
```
VITE_API_KEY=your_exchangerate_api_key_here
```

Then update `src/APIs/api.jsx` to use the environment variable:
```javascript
baseURL: `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/pair`
```

---

## Future Enhancements

- Add currency search/filter functionality
- Implement API response caching to reduce API calls
- Add historical exchange rate charts
- Support for cryptocurrency conversions
- Offline mode with cached rates
- Decimal precision selector for conversion results
- Swap currencies button for reversed conversion
