import VueCustomElement from './index.vue';
import { defineCustomElements } from '@/utils/defineCustomElements';

export const name = 'FPS 信息';
export const tag = 'st-fps-info';

defineCustomElements(tag, VueCustomElement);
