import { JOBS, SAMPLE_NAMES } from "./data";

interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  job: string;
}

const generateUniqueUsers = (
  count: number,
  delay: number = 1000
): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    const users: User[] = [];
    const usedCombinations = new Set();

    if (count && count > 0) {
      for (let i = 0; i < count; i++) {
        let randomIndex1, randomIndex2, combination;
        do {
          randomIndex1 = Math.floor(Math.random() * SAMPLE_NAMES.length);
          randomIndex2 = Math.floor(Math.random() * SAMPLE_NAMES.length);
          combination = [randomIndex1, randomIndex2].sort().join(",");
        } while (usedCombinations.has(combination));

        usedCombinations.add(combination);

        const { fname: fname1, lname: lname1 } = SAMPLE_NAMES[randomIndex1];
        const { fname: fname2, lname: lname2 } = SAMPLE_NAMES[randomIndex2];
        const id = i; // Unique ID starting from 0
        const email = `${fname1.toLowerCase()}.${lname2.toLowerCase()}@dummy.com`; // Creating email
        const job = JOBS[Math.floor(Math.random() * JOBS.length)]; // Random job

        users.push({ id, fname: fname1, lname: lname2, email, job });
      }
    }

    // Simulate delay to make it look like an API call
    setTimeout(() => {
      if (users.length > 0) {
        resolve(users);
      } else {
        reject(new Error("Invalid count provided"));
      }
    }, delay);
  });
};

export { generateUniqueUsers };
