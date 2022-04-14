// @ts-expect-error 扩展环境变量
declare const process: {
  env: {
    /** 当前的编译平台类型 */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq'
    [key: string]: any
  }
};
