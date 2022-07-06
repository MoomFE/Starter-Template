import VueComponent from './index.vue';
import { tag } from './info';
import { defineCustomElements } from '@/utils/defineCustomElements';

defineCustomElements(tag, VueComponent);
