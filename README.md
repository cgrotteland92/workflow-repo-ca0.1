# Workflow repo for the CA

### Unit Testing with Vitest

- **isActivePath Function:**

  - Returns `true` when the current path exactly matches the `href`.
  - Returns `true` for the root path (`"/"`) when the path is `"/"` or `"/index.html"`.
  - Returns `true` when the current path includes the `href`.
  - Returns `false` when the paths do not match.

- **getUserName Function:**
  - Returns the name from the user object stored in local storage (after saving a user).
  - Returns `null` when no user exists in local storage.

### End-to-End Testing with Playwright

- **Login Flow:**

  - User can log in successfully with valid credentials provided via environment variables.
  - An error message is shown when invalid credentials are used.

- **Navigation Flow:**
  - Navigates to the home page.
  - Waits for the venue list to load.
  - Clicks the first venue.
  - Verifies that the venue details page contains the words "Venue details" in the heading.

## Environment Setup

Ensure you have **Node.js** and **npm** installed.

## Environment Variables

Located in .env.example:
TEST_USER_EMAIL=youremail@stud.noroff.no
TEST_USER_PASSWORD=yourpassword

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/cgrotteland92/workflow-repo-ca0.1.git
   ```

```bash
   cd workflow-repo-ca0.1
```

```bash
   npm run test:unit
```

```bash
   npx playwright test --headed
```
