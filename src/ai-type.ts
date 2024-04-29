const aiTypeConfig = {
  'AI 聊天对话': ['聊天', '聊天对话', 'chat'],

  // 画图
  'AI 绘图': ['绘画', '画图', '图片生成', '图片模型', '绘图'],
  'AI 图像处理': ['图片设计', '图片编辑', '图片增强'],

  // 视频
  'AI 视频生成': ['视频', '视频制作', '视频编辑'],
  'AI 数字人': ['数字人'],

  'AI 语音生成': ['语音', '音频', '音频工具'],

  'AI 角色生成': ['角色', '生成角色'],
  'AI 提示词': ['prompt', '提示词', '指令生成'],

  'AI 搜索引擎': ['搜索'],
  'AI 行业工具': ['行业'],
  'AI 写作助手': ['写作'],
  'AI 文档工具': ['文档', '表格', 'PPT', 'PDF'],
  'AI 思维导图': ['导图'],
  'AI 翻译工具': ['翻译'],

  'AI 编程开发': ['代码助手', '编程', '代码生成'],
  'AI 网站生成': ['网站生成'],
  // 'AI Agent': ['Agent'],

  'AI 电商工具': ['电商'],
  'AI 会议助手': ['会议助手'],

  'AI 综合工具': ['综合', '聚合', '多功能']
};

export const aiTypeList = Object.keys(aiTypeConfig);

export function getTypes(title: string | string[]) {
  const types: string[] = [];

  if (title) {
    if (!Array.isArray(title)) title = [title];

    for (const t of title) {
      for (const [type, value] of Object.entries(aiTypeConfig)) {
        if (!types.includes(type) && value.some(d => t.includes(d))) types.push(type);
      }
    }

    if (!types) console.log('[getTypes]未匹配到类型: ', title);
  }

  return types;
}
