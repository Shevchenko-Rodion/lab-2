import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export interface NumberFormatOptions {
  decimals?: number;
  prefix?: string;
}

export function formatNumber(n: number, options?: NumberFormatOptions): string {
  const decimals = options?.decimals ?? 2;
  const fixed = n.toFixed(decimals);
  const prefix = options?.prefix ?? '';
  return prefix + fixed;
}

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce(
    (result, item) => {
      const groupKey = String(item[key]);
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    },
    {} as Record<string, T[]>,
  );
}
