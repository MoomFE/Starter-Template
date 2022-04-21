import VueCustomElement from './index.vue';
import { defineCustomElements } from '@/utils/defineCustomElements';

export const name = '内存信息';
export const tag = 'st-memory-info';

defineCustomElements(tag, VueCustomElement);
