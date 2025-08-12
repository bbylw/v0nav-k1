# WebNav Hub - 现代化网站导航中心

<div align="center">

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/frees-projects-5b1d5f6a/v0-)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/jos3myFsWI5)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

## 📖 项目简介

WebNav Hub 是一个现代化的网站导航中心，专为中文用户设计。它提供了一个优雅、响应式的界面来组织和访问各种在线服务和工具。从原始的静态HTML页面升级为基于Next.js的现代化React应用程序。

### ✨ 主要特色

- 🎨 **现代化设计** - 采用深色主题配橙色强调色，提供优雅的视觉体验
- 📱 **完全响应式** - 在所有设备上都能完美显示，从手机到桌面
- ⚡ **高性能** - 基于Next.js 15构建，提供极快的加载速度
- 🔍 **智能导航** - 平滑滚动导航，实时高亮当前分类
- 🌐 **丰富链接** - 包含160+个精心分类的网站链接
- ♿ **无障碍访问** - 遵循WCAG指南，支持键盘导航和屏幕阅读器
- 🎯 **TypeScript支持** - 完整的类型安全保障

## 🗂️ 网站分类

### 🤖 AI搜索 (43个网站)
包含最新的AI工具和搜索引擎：
- **国际平台**: ChatGPT, Claude, Gemini, Copilot
- **国内平台**: 豆包, 通义千问, 文心一言, 腾讯元宝
- **开发工具**: v0, bolt.new, cursor
- **AI绘图**: Leonardo.ai, Midjourney
- **其他**: OpenRouter, HuggingFace, DeepSeek

### 📱 社交媒体 (18个网站)
主流社交平台和相关工具：
- **社交平台**: Facebook, Twitter, Instagram, Reddit
- **开发平台**: GitHub, Vercel, Netlify, Railway
- **视频工具**: YouTube下载器, 视频处理工具
- **音频工具**: Suno AI音乐生成

### 🛠️ 实用工具 (70+个网站)
涵盖各种日常和专业工具：
- **翻译服务**: Google翻译, DeepL, 有道翻译
- **图片处理**: TinyPNG, Remove.bg, Canva
- **文档工具**: PDF处理, 在线编辑器
- **开发工具**: 代码格式化, API测试
- **网络工具**: 域名查询, IP查询, 网速测试

### 📰 科技资讯 (9个网站)
权威科技媒体和资讯平台：
- TechCrunch, The Verge, Wired
- Ars Technica, Engadget
- 36氪, 虎嗅, IT之家

### ☁️ 云存储 (7个网站)
主流云存储服务：
- Google Drive, Dropbox, OneDrive
- MEGA, 百度网盘, 阿里云盘

### 📧 电子邮箱 (8个网站)
各类邮箱服务提供商：
- Gmail, Outlook, Yahoo Mail
- ProtonMail, Tutanota, 163邮箱

## 🚀 技术栈

### 核心框架
- **[Next.js 15](https://nextjs.org/)** - React全栈框架，支持App Router
- **[React 18](https://reactjs.org/)** - 用户界面库
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的JavaScript

### 样式和UI
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的CSS框架
- **[shadcn/ui](https://ui.shadcn.com/)** - 高质量的React组件库
- **[Radix UI](https://www.radix-ui.com/)** - 无样式的可访问组件
- **[Font Awesome](https://fontawesome.com/)** - 图标库

### 开发工具
- **[ESLint](https://eslint.org/)** - 代码质量检查
- **[Prettier](https://prettier.io/)** - 代码格式化
- **[Vercel](https://vercel.com/)** - 部署和托管平台

## 📦 安装和运行

### 环境要求
- Node.js 18.0 或更高版本
- npm, yarn, pnpm 或 bun 包管理器

### 快速开始

1. **克隆仓库**
\`\`\`bash
git clone https://github.com/your-username/webnav-hub.git
cd webnav-hub
\`\`\`

2. **安装依赖**
\`\`\`bash
npm install
# 或
yarn install
# 或
pnpm install
# 或
bun install
\`\`\`

3. **启动开发服务器**
\`\`\`bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
\`\`\`

4. **访问应用**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🎨 自定义配置

### 添加新的网站链接

在 `app/page.tsx` 文件中找到相应的分类数组，添加新的链接对象：

\`\`\`typescript
{
  name: "网站名称",
  url: "https://example.com",
  icon: "fas fa-icon-name", // Font Awesome图标类名
  description: "网站描述"
}
\`\`\`

### 修改主题颜色

在 `app/globals.css` 文件中修改CSS变量：

\`\`\`css
:root {
  --primary-color: #ff6b35;    /* 主色调 */
  --background-color: #1a1a1a; /* 背景色 */
  --card-background: #2d2d2d;  /* 卡片背景 */
}
\`\`\`

### 添加新的分类

1. 在数据数组中添加新分类
2. 更新导航菜单
3. 添加相应的图标和样式

## 📱 响应式设计

项目采用移动优先的响应式设计：

- **手机** (< 768px): 单列布局，大按钮，优化触摸体验
- **平板** (768px - 1024px): 双列布局，适中的间距
- **桌面** (> 1024px): 多列布局，悬停效果，键盘导航

## ♿ 无障碍访问

- 完整的键盘导航支持
- 屏幕阅读器友好的语义化HTML
- 高对比度颜色方案
- ARIA标签和角色属性
- 焦点管理和视觉指示器

## 🔧 开发指南

### 项目结构
\`\`\`
webnav-hub/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 主页面组件
├── components/            # 可复用组件
│   ├── ui/               # shadcn/ui组件
│   └── theme-provider.tsx # 主题提供者
├── lib/                  # 工具函数
│   └── utils.ts          # 通用工具
├── public/               # 静态资源
└── README.md             # 项目文档
\`\`\`

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint和Prettier配置
- 组件使用函数式写法和Hooks
- CSS使用Tailwind实用类

### 性能优化
- Next.js自动代码分割
- 图片懒加载和优化
- 字体预加载和优化
- 静态生成和缓存策略

## 🚀 部署

### Vercel部署 (推荐)
1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

### 其他平台
- **Netlify**: 支持静态导出
- **Railway**: 支持全栈部署
- **Docker**: 提供容器化部署

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

### 贡献类型
- 🐛 修复bug
- ✨ 添加新功能
- 📝 改进文档
- 🎨 优化UI/UX
- ⚡ 性能优化
- 🔒 安全改进

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Next.js](https://nextjs.org/) - 强大的React框架
- [Tailwind CSS](https://tailwindcss.com/) - 优秀的CSS框架
- [shadcn/ui](https://ui.shadcn.com/) - 精美的组件库
- [Font Awesome](https://fontawesome.com/) - 丰富的图标库
- [Vercel](https://vercel.com/) - 优秀的部署平台

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 📧 邮箱: your-email@example.com
- 🐛 问题反馈: [GitHub Issues](https://github.com/your-username/webnav-hub/issues)
- 💬 讨论: [GitHub Discussions](https://github.com/your-username/webnav-hub/discussions)

---

<div align="center">

**[⬆ 回到顶部](#webnav-hub---现代化网站导航中心)**

Made with ❤️ by [Your Name](https://github.com/your-username)

</div>
