import { defineCustomElement } from 'vue';
import { isBrowser } from '@moomfe/small-utils';
import VueCustomElement from './index.vue';

export const name = 'FPS 信息';
export const tag = 'st-fps-info';

const ProductBriefing = defineCustomElement(VueCustomElement);

if (isBrowser && !customElements.get(tag))
  customElements.define(tag, ProductBriefing);
