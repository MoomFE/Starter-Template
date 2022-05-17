import type { FormItemRule, FormRules } from 'naive-ui';
import { deepClone, toArray } from '@moomfe/small-utils';

/**
 * 定义一个表单验证规则
 */
export function defineFormValidateRules(formRules: FormRules) {
  return Object.fromEntries(
    Object.entries(formRules).map(([key, userRules]) => {
      const rules: FormItemRule[] = [];

      toArray(userRules).forEach((_rule) => {
        const rule = deepClone(_rule);

        // 触发方式 - 默认拥有 blur 的触发方式
        if (!rule.trigger) rule.trigger = 'blur';

        rules.push(rule);
      });

      return [
        key,
        rules,
      ];
    }),
  );
}
