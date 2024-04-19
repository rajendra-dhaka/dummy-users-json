# dummy-users-json

[![npm version](https://badge.fury.io/js/dummy-users-json.svg)](https://www.npmjs.com/package/dummy-users-json)

🎉 Generate dummy user data with ease! `dummy-users-json` is a lightweight npm package that provides functions to generate dummy user data in JSON format. Perfect for testing and prototyping applications without the need for real user data.

## Installation

To install `dummy-users-json`, use npm or yarn:

```bash
npm install dummy-users-json
```

or

```bash
yarn add dummy-users-json
```

## Usage in Node js Applications

```javascript
import { generateUniqueUsers } from "dummy-users-json";

// Define the function
async function fetchUsers() {
  try {
    const users = await generateUniqueUsers(10);
    return users;
  } catch (error) {
    console.error("Error:", error);
    return []; // Optionally return an empty array or handle the error
  }
}

// Call the function and store the returned value in a variable
const fetchedUsers = await fetchUsers();

// Log the fetched users to the console
console.log(fetchedUsers);
```

## Usage in React Applications

```javascript
import { generateUniqueUsers } from "dummy-users-json";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();

  // Use below for TypeScript,instead of above useState
  /*
  interface User {
    id: number;
    fname: string;
    lname: string;
    email: string;
    job: string;
  }
  const [users, setUsers] = useState<User[] | undefined>();
  */

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await generateUniqueUsers(1);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users
          ? users?.length > 0
            ? users.map((user) => (
                <li key={user.id}>
                  <h1>
                    {user.fname}&nbsp; {user.lname}
                  </h1>
                  <p>{user.email}</p>
                  <h3 style={{ textTransform: "capitalize" }}>{user.job}</h3>
                </li>
              ))
            : "No Data Available"
          : "Loading..."}
      </ul>
    </div>
  );
}

export default App;
```

## Example Output

```json
[
  {
    "id": 0,
    "fname": "John",
    "lname": "Doe",
    "email": "john.doe@dummy.com",
    "job": "Software Engineer"
  },
  {
    "id": 1,
    "fname": "Jane",
    "lname": "Smith",
    "email": "jane.smith@dummy.com",
    "job": "Data Analyst"
  }
  // More users...
]
```

## API

### `generateUsers(count: number, delay(OPTIONAL): number): User[]`

Generates an array of dummy users.

- **`count`**: The number of users to generate.
- **`delay`**: (OPTIONAL) defaults to 1000 ms, specifies the delay in milliseconds for simulating data fetching timing.

Returns an array of user objects.

## User Object

- **`id`**: Unique identifier for the user.
- **`fname`**: First name of the user.
- **`lname`**: Last name of the user.
- **`email`**: Email address of the user (generated from first name and last name).
- **`job`**: Job title of the user (randomly selected from a predefined list).

## Comparison Table

| Features         | dummy-users-json | Other Tools |
| ---------------- | ---------------- | ----------- |
| Ease of Use      | ✅               | ❌          |
| Offline Usage    | ✅               | ❌          |
| Unique Results   | 300              | Varies      |
| TypeScript Ready | ✅               | Varies      |

## Additional Information

- This package can generate up to 300 unique results.
- No internet connection is required to fetch data; it mocks API calls due to its asynchronous nature.
- Developed in TypeScript, enabling auto-suggestion features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
