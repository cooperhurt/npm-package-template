type User = {
  name: string;
  age: number;
};

export const helloWorld = (user: User) => `Hello, ${user.name}`;
