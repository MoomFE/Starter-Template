/**
 * 格式化导入文件的信息
*/
export function formatComponentsGlob(files: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(files).map(([path, value]) => {
      return [path.split('/').reverse()[1], value];
    }),
  );
}
