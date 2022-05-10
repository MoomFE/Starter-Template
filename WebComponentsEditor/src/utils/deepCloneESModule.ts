import { deepClone } from '@moomfe/small-utils';

/**
 * 深拷贝 ES Module
*/
export function deepCloneESModule<T>(value: T): T {
  if (value)
    return deepClone(Object.fromEntries(Object.entries(value))) as any;
  return value;
}
