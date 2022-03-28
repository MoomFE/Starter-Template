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
    // Primary
    'primary': string
    'primary-hover': string
    'primary-active': string
    // Info
    'info': string
    'info-hover': string
    'info-active': string
    // Success
    'success': string
    'success-hover': string
    'success-active': string
    // Warning
    'warning': string
    'warning-hover': string
    'warning-active': string
    // Error
    'error': string
    'error-hover': string
    'error-active': string
  }
}
