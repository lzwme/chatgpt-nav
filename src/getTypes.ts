import { config } from './config';

export function getTypes(title: string | string[], typeInfo = config.categoryInfo) {
  const types: string[] = [];

  if (title) {
    if (!Array.isArray(title)) title = [title];

    for (const t of title) {
      for (const [type, value] of Object.entries(typeInfo)) {
        if (!types.includes(type) && (type == t || value.keywords?.some(d => t.includes(d)))) types.push(type);
      }
    }

    if (!types) console.log('[getTypes]未匹配到类型: ', title);
  }

  return types;
}
