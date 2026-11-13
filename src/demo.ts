import { add, capitalize, formatNumber, User, groupBy } from './index';

console.log('sum:', add(5, 15));
console.log('capitalized:', capitalize('lab'));
console.log('formatted:', formatNumber(99.9, { decimals: 0, prefix: '€' }));

const users: User[] = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 25, email: 'charlie@example.com' },
];

console.log('grouped by age:', groupBy(users, 'age'));
