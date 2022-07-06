import { uniqueKeyCustomizer } from '@moomfe/small-utils';

/**
 * 使 web components 中可以使用 Naive UI 的组件
 * @example
 *
 * // js
 * const classPrefix = useNaive();
 *
 * // template
 * <n-config-provider :cls-prefix="classPrefix">
 *   <n-select />
 * </n-config-provider>
 */
export function useNaive() {
  const el = useCurrentElement();
  const classPrefix = uniqueKeyCustomizer();
  const selectors = `style[cssr-id^="${classPrefix}-"]`;

  onMounted(() => {
    function insertStyle() {
      const shadowRoot = el.value!.parentNode!;

      shadowRoot.querySelectorAll(selectors).forEach((style) => {
        shadowRoot.removeChild(style);
      });

      Array.from(document.querySelectorAll(selectors)).forEach((style) => {
        shadowRoot.appendChild(style.cloneNode()).textContent = style.textContent;
      });
    }

    useMutationObserver(document.head, insertStyle, {
      childList: true,
    });

    insertStyle();
  });

  return classPrefix;
}

