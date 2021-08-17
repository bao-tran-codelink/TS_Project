// const person: {name: string, age: number} = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Bao',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
type Person = {
  name: string,
  age: number,
  hobbies : string[],
  role: [number, ROLE]
};

enum ROLE {
  ADMIN = 9,
  READ_ONLY_USER,
  AUTHOR,
}

const person: Person = {
  name: 'Bao',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: [2, ROLE.ADMIN],
};

person.role.push(ROLE.ADMIN);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
