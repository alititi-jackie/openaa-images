# OpenAA 图片库

> `img.openaa.com` — OpenAA 通用图片资源仓库

轻量静态图片库，无需数据库、无需后台，图片文件直接在 GitHub 维护，GitHub Actions 自动生成 `images.json`，前端静态页面读取 JSON 展示图片，支持分类筛选、大图查看、复制链接、下载原图。

---

## 图片分类目录

| 目录 | 分类名称 | 用途 |
|------|---------|------|
| `img/news/` | 新闻图片 | 新闻封面图、配图 |
| `img/share/` | 分享海报 | 社交媒体分享海报 |
| `img/banners/` | 广告图片 | 广告横幅、Banner |
| `img/default/` | 默认图片 | 通用默认占位图 |
| `img/logo/` | Logo | OpenAA 及合作方 Logo |
| `img/icons/` | 图标 | 功能图标、分类图标 |
| `img/dmv/` | DMV 图片 | DMV 相关配图 |
| `img/services/` | 本地服务图片 | 本地服务类配图 |
| `img/pages/` | 页面配图 | 各页面装饰配图 |
| `img/others/` | 其它图片 | 其它分类图片 |

---

## 使用流程

### 添加图片

1. 将图片上传到对应的分类目录，例如 `img/news/`。
2. 提交（commit）并推送（push）到 GitHub `main` 分支。
3. GitHub Actions 自动运行 `scripts/generate-images.js`，更新 `images.json`。
4. 打开 [https://img.openaa.com/](https://img.openaa.com/) 即可看到新图片。

### 查看图片

1. 打开 [https://img.openaa.com/](https://img.openaa.com/)。
2. 点击顶部分类导航按分类筛选，默认显示全部图片。
3. 点击缩略图进入大图查看模式。
4. 在大图页面可以：
   - **复制链接** — 复制图片完整 URL，例如 `https://img.openaa.com/img/news/xxx.jpg`
   - **下载图片** — 下载原图到本地
   - **返回列表** — 回到缩略图列表，保留当前分类

### 删除图片

1. 直接在 GitHub 仓库中删除对应图片文件。
2. 推送到 `main` 分支后，GitHub Actions 自动重新生成 `images.json`。
3. 网站图片列表自动更新，无需任何手动操作。

---

## 图片命名建议

| 建议 | 说明 |
|------|------|
| ✅ 使用英文小写 | `ny-dmv-guide.jpg` |
| ✅ 单词用 `-` 分隔 | `openaa-news-poster.png` |
| ✅ 使用有意义的名称 | `home-banner-restaurant-01.jpg` |
| ✅ 使用 `jpg / png / webp` | 推荐格式，兼容性好 |
| ❌ 不要使用中文文件名 | `新闻图片.jpg` → 不推荐 |
| ❌ 不要使用空格 | `my file.jpg` → 不推荐 |
| ❌ 不要使用无意义名称 | `IMG_1234.jpg` → 不推荐 |
| ❌ 新闻封面图建议压缩后上传 | 避免文件过大影响加载速度 |

**命名示例：**

```
ny-dmv-renewal-guide-2026.jpg
openaa-news-default-cover.webp
home-banner-restaurant-01.jpg
openaa-share-poster-default.png
```

---

## 项目原则

- 不使用 Supabase / 数据库
- 不做后台管理
- 不做网页上传或删除
- 不做登录
- 不在前端调用 GitHub API
- 保持简单、稳定、轻量

---

## 文件结构

```
openaa-images/
├── index.html                        # 图片库网站首页
├── images.json                       # 自动生成的图片列表
├── logo.png                          # 网站顶部栏 Logo
├── favicon.ico                       # 浏览器标签图标
├── apple-touch-icon.png              # iOS 桌面图标
├── site.webmanifest                  # PWA Web Manifest
├── README.md                         # 项目说明
├── .github/
│   └── workflows/
│       ├── static.yml                # GitHub Pages 部署
│       └── generate-images.yml      # 自动生成 images.json
├── scripts/
│   └── generate-images.js           # 图片扫描脚本
└── img/
    ├── news/       新闻图片
    ├── share/      分享海报
    ├── banners/    广告图片
    ├── default/    默认图片
    ├── logo/       Logo
    ├── icons/      图标
    ├── dmv/        DMV 图片
    ├── services/   本地服务图片
    ├── pages/      页面配图
    └── others/     其它图片
```
