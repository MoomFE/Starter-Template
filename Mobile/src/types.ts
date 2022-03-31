import type { ViteSSGContext } from 'vite-ssg';

/**
 * 用户模块定义方法
 */
export type UserModule = (ctx: ViteSSGContext) => void;

/**
 * 项目配置
 */
export interface Settings{
  /** 项目名称 */
  title: string
  /** 项目主题色 */
  colors: {
    // Primary 颜色
    'primary': string
    'primary-hover': string
    'primary-active': string
    // Info 颜色
    'info': string
    'info-hover': string
    'info-active': string
    // Success 颜色
    'success': string
    'success-hover': string
    'success-active': string
    // Warning 颜色
    'warning': string
    'warning-hover': string
    'warning-active': string
    // Error 颜色
    'error': string
    'error-hover': string
    'error-active': string
  }
  /** 项目字体 */
  fontFamily: {
    /** 非衬线字体 */
    sans: string
    /** 衬线字体 */
    serif: string
    /** 等宽字体 */
    mono: string
  }
}
