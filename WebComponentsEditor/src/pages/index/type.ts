/**
 * 单个选项卡存储的信息
 */
export interface Tab {
  /** Key */
  key: string
  /** 选项卡名称 */
  title: string
  /** 选项卡内的组件 */
  components: string[]
}
