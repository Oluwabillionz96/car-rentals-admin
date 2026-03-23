export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "agent";
}

export const MOCK_USER: User[] = [
  {
    id: 1,
    name: "Oluwa Billionz",
    email: "oluwabillionz@gmail.com",
    password: "OLUWABillionz123!",
    role: "admin",
  },
  {
    id: 2,
    name: "Goodluck Reuben",
    email: "goodluckreuben@gmail.com",
    password: "GOODLUCKReuben123",
    role: "agent",
  },
];
