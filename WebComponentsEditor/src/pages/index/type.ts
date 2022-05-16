/**
 * 单个选项卡存储的信息
 */
export interface Tab {
  /** ID */
  id: string
  /** 选项卡内的组件 */
  component: string
  /** 当前选中的测试数据 */
  data?: string
  /** 重载数据使用 */
  dataReloadCount?: number
}
