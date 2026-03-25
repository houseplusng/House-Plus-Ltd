# House Plus Ltd - 官方网站

<div align="center">
  <img src="https://www.houseplus.ltd/images/logo.png" alt="House Plus Ltd" width="200" />
  <br />
  <strong>Professional Manufacturer of Household Appliances, Solar Products & 3C Electronics</strong>
  <br />
  <br />
  <a href="https://www.houseplus.ltd">🌐 Visit Website</a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="https://github.com/yourusername/houseplus-website">📦 GitHub Repository</a>
</div>

---

## 📖 项目简介

House Plus Ltd 是一个专业的国际贸易企业官网，展示公司的产品线、OEM/ODM 服务能力，并为全球客户提供便捷的联系渠道。

### 主要功能

- 🌍 **多语言支持** - 英语、法语、西班牙语、阿拉伯语
- 📱 **响应式设计** - 完美适配桌面端、平板、手机
- 🔍 **SEO 优化** - 完整的 sitemap、robots.txt、结构化数据
- 📊 **GEO 优化** - 地理定位标签、多语言 hreflang
- 📝 **联系表单** - 客户咨询提交功能
- 💬 **WhatsApp 集成** - 一键联系销售团队
- 🏭 **产品展示** - 三大产品线：家电、太阳能、3C 电子
- ⚙️ **OEM/ODM 服务** - 定制化制造解决方案

---

## 🚀 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Next.js | 14.0.4 | React 框架，支持 SSR/SSG |
| React | 18.2.0 | UI 库 |
| Tailwind CSS | 3.3.6 | 原子化 CSS 框架 |

---

## 📁 项目结构
houseplus-website/
│
├── app/ # Next.js App Router
│ ├── [lang]/ # 多语言动态路由
│ │ ├── layout.js # 多语言布局 (含 hreflang)
│ │ ├── page.js # 首页
│ │ ├── about/ # 关于页面
│ │ │ └── page.js
│ │ ├── contact/ # 联系页面
│ │ │ └── page.js
│ │ └── products/ # 产品页面
│ │ └── page.js
│ ├── api/
│ │ └── contact/
│ │ └── route.js # 表单提交 API
│ ├── globals.css # 全局样式
│ ├── layout.js # 根布局
│ ├── robots.ts # robots.txt 生成器
│ └── sitemap.ts # sitemap.xml 生成器
│
├── components/ # React 组件
│ ├── Header.js # 头部导航 (多语言/RTL)
│ ├── Footer.js # 页脚
│ ├── Hero.js # 首页英雄区
│ ├── About.js # 关于部分
│ ├── Products.js # 产品展示
│ ├── Services.js # OEM/ODM 服务
│ ├── Testimonials.js # 客户评价
│ ├── Contact.js # 联系表单
│ └── StructuredData.js # JSON-LD 结构化数据
│
├── lib/
│ └── i18n.js # 多语言翻译文件
│
├── public/
│ └── images/ # 图片资源
│ ├── factory-preview.jpg
│ ├── factory-interior.jpg
│ ├── og-image.jpg
│ └── products/
│
├── package.json # 项目依赖
├── tailwind.config.js # Tailwind 配置
├── postcss.config.js # PostCSS 配置
├── .gitignore # Git 忽略文件
└── README.md # 项目说明
