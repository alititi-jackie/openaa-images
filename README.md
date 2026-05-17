# OpenAA 图片库

> `img.openaa.com` — OpenAA 官方图片与分享资源平台

OpenAA 图片库是 OpenAA 生态中的统一图片与静态资源平台。

主要用于：

- OpenAA 图片资源管理
- DMV 分享海报
- 新闻封面图
- 广告图片
- Logo 与图标
- 华人生活专题图片
- Google 图片搜索收录
- 外部分享与 SEO 图片展示

轻量、稳定、无需数据库，图片文件直接通过 GitHub 管理，GitHub Actions 自动生成 `images.json`，前端静态页面自动读取展示。

---

# 平台定位

img.openaa.com 是 OpenAA 官方图片与分享资源域名。

主要承担：

- OpenAA 图片展示
- DMV 中文学习分享图
- 新闻封面图
- 广告横幅
- OpenAA 品牌素材
- Google 图片 SEO
- 社交媒体分享图片

并提供：

- 图片浏览
- 分类筛选
- 原图查看
- 复制图片链接
- 图片下载
- SEO 图片入口

---

# 当前图片分类

| 分类 | 路径 |
|---|---|
| 新闻图片 | `/img/news/` |
| 分享海报 | `/img/share/` |
| 广告图片 | `/img/banners/` |
| 默认图片 | `/img/default/` |
| Logo | `/img/logo/` |
| 图标 | `/img/icons/` |
| DMV 图片 | `/img/dmv/` |
| 本地服务图片 | `/img/services/` |
| 页面配图 | `/img/pages/` |
| 其它图片 | `/img/others/` |

---

# 当前功能

## 图片浏览

支持：

- 图片缩略图列表
- 分类筛选
- 手机端横向分类栏
- 大图查看
- 原图打开

---

## 图片操作

支持：

- 复制图片链接
- 下载原图
- 打开原图
- 分享图片

---

# 使用流程

## 添加图片

1. 将图片上传到对应分类目录，例如：

```txt
img/news/
img/share/
img/dmv/
```

2. 提交（commit）并 push 到 GitHub `main` 分支。

3. GitHub Actions 自动运行：

```txt
scripts/generate-images.js
```

自动重新生成：

```txt
images.json
```

4. 打开：

# https://img.openaa.com/

即可看到最新图片。

---

## 查看图片

1. 打开：

# https://img.openaa.com/

2. 点击顶部分类栏筛选图片。

3. 点击缩略图进入大图模式。

4. 支持：

- 复制链接
- 下载图片
- 返回列表
- 打开原图

图片链接格式：

```txt
https://img.openaa.com/img/news/xxx.jpg
```

---

## 删除图片

1. 直接在 GitHub 仓库删除图片文件。
2. push 到 `main`
3. GitHub Actions 自动更新 `images.json`
4. 网站自动同步更新

无需后台。

---

# 图片命名建议

| 建议 | 示例 |
|---|---|
| 使用英文小写 | `ny-dmv-guide.jpg` |
| 使用 `-` 分隔单词 | `home-banner-01.webp` |
| 使用有意义文件名 | `openaa-share-poster.png` |
| 推荐 jpg/png/webp | 更好兼容性 |

不建议：

- 中文文件名
- 空格
- IMG_1234 这类无意义名称

---

# DMV 分享海报

当前 DMV 分享海报主要用于：

- DMV 中文学习推广
- DMV 模拟考试分享
- 华人 DMV 搜索流量
- 社交媒体传播

相关目录：

```txt
/img/share/
/img/dmv/
```

未来方向：

- DMV 成绩分享图
- DMV 教程长图
- DMV SEO 海报
- 动态 DMV 分享图片

---

# Google 图片收录

img.openaa.com 当前重点：

- Google 图片搜索
- DMV 中文关键词
- OpenAA 品牌关键词
- 新闻封面图
- 分享海报
- SEO 图片曝光

网站支持：

- sitemap.xml
- robots.txt
- Open Graph
- canonical
- structured data

---

# 项目原则

- 不使用数据库
- 不使用 Supabase
- 不做后台系统
- 不做网页上传
- 不做登录
- 不在前端调用 GitHub API
- 保持轻量、稳定、长期可维护

---

# 文件结构

```txt
openaa-images/
├── index.html
├── images.json
├── logo.png
├── favicon.ico
├── apple-touch-icon.png
├── site.webmanifest
├── README.md
├── .github/
│   └── workflows/
│       ├── static.yml
│       └── generate-images.yml
├── scripts/
│   └── generate-images.js
└── img/
    ├── news/
    ├── share/
    ├── banners/
    ├── default/
    ├── logo/
    ├── icons/
    ├── dmv/
    ├── services/
    ├── pages/
    └── others/
```

---

# OpenAA 主平台

OpenAA 主业务平台：

# https://ny.openaa.com

包括：

- 招聘
- 房屋
- 二手
- 本地服务
- 新闻资讯
- 华人导航
- DMV 中文学习平台
- 用户系统
- 后台运营系统

---

# 技术结构

## 图片资源系统

当前图片资源通过：

- GitHub Repository
- CDN
- img.openaa.com

统一管理。

---

## OpenAA 主站技术栈

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

---

# 当前状态

当前已完成：

- 图片分类系统
- 图片浏览页面
- 图片复制链接
- 图片下载
- DMV 分享海报
- OpenAA 品牌图片
- SEO 基础结构

未来方向：

- 图片搜索
- AI 图片分类
- DMV 动态分享图
- 更多图片分类
- OpenAA 全站图片生态

---

# 相关站点

| 站点 | 说明 |
|---|---|
| https://openaa.com | OpenAA 品牌主域名 |
| https://ny.openaa.com | OpenAA 主业务平台 |
| https://img.openaa.com | OpenAA 图片与分享资源平台 |

---

# License

Private Project — OpenAA
