import { add, capitalize, formatNumber } from './index';

console.log('sum:', add(10, 20));
console.log('capitalized:', capitalize('typescript'));
console.log('formatted:', formatNumber(1234.5678, { decimals: 1, prefix: '$' }));
