/**
 * 格式化导入文件的信息
*/
export function formatComponentsGlob(files: Record<string, any> | string[]) {
  if (Array.isArray(files)) {
    return Object.fromEntries(
      files.map(path => [path.split('/').reverse()[1], path]),
    );
  }

  return Object.fromEntries(
    Object.entries(files).map(([path, value]) => {
      return [path.split('/').reverse()[1], value];
    }),
  );
}
