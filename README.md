# 网页Today Eat What

一个简洁便捷的网页点菜应用，支持添加备注和分享链接功能。

## 功能特色

- ✨ **简洁界面** - 清爽的设计，操作简单直观
- 🍽️ **菜单展示** - 精美的菜品展示，无价格干扰
- 🛒 **购物车管理** - 实时更新购物车，支持数量调整
- 📝 **备注功能** - 为每个菜品添加特殊要求或备注
- 🔗 **链接分享** - 支持添加抖音等社交媒体分享链接
- 📱 **响应式设计** - 完美适配手机和桌面设备
- ✅ **订单确认** - 简化的订单确认流程
- 👨‍🍳 **浪漫Cook界面** - Snow大厨开始制作，带有心形特效和闪烁动画
- 💖 **本地存储** - 订单自动保存到页面，无需填写个人信息

## 如何使用

### 本地运行

1. **克隆项目**
   ```bash
   git clone <项目地址>
   cd cook_web
   ```

2. **启动本地服务器**
   ```bash
   # 使用 Python 3
   python3 -m http.server 8080
   
   # 或使用 Node.js (需要先安装 http-server)
   npx http-server -p 8080
   ```

3. **打开浏览器**
   访问 `http://localhost:8080`

### 功能使用

1. **浏览菜单** - 在菜单区域查看所有可用菜品
2. **选择菜品** - 点击菜品卡片打开详情页面
3. **添加备注** - 在详情页面输入特殊要求或备注信息  
4. **分享链接** - 添加抖音、小红书等社交媒体分享链接
5. **调整数量** - 使用 +/- 按钮调整菜品数量
6. **加入购物车** - 确认信息后加入购物车
7. **查看购物车** - 右侧实时显示已选菜品
8. **提交订单** - 简单确认后进入浪漫的Cook界面

## 项目结构

```
cook_web/
├── index.html          # 主页面
├── styles.css          # 样式文件  
├── script.js          # JavaScript 逻辑
├── README.md          # 项目说明
└── .github/
    └── copilot-instructions.md  # Copilot 指令
```

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和响应式设计
- **JavaScript ES6+** - 交互逻辑
- **本地存储** - 数据持久化

## 特色功能

### 备注系统
- 每个菜品都可以添加个性化备注
- 支持特殊要求如"不要香菜"、"微辣"等
- 备注会在购物车和订单中显示

### 链接分享
- 支持添加任何URL链接
- 特别适合分享抖音、小红书等内容
- 链接在购物车中可直接点击访问

### 响应式设计
- 完美适配手机、平板和桌面
- 触控友好的界面设计
- 流畅的用户体验

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 部署到互联网

### 方案一：GitHub Pages（免费推荐）

1. **创建 GitHub 仓库**
   - 登录 [GitHub.com](https://github.com)
   - 点击 "New repository"
   - 仓库名称：`cook-web` 或任意名称
   - 设为 Public，勾选 "Add a README file"

2. **上传代码**
   ```bash
   # 关联远程仓库（替换为你的仓库地址）
   git remote add origin https://github.com/你的用户名/cook-web.git
   
   # 推送代码
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 进入仓库的 Settings 页面
   - 找到 "Pages" 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"，文件夹选择 "/ (root)"
   - 点击 Save

4. **访问网站**
   - 几分钟后访问：`https://你的用户名.github.io/cook-web`

### 方案二：Netlify（免费，支持拖放）

1. **访问 [Netlify.com](https://netlify.com)**
2. **注册/登录账号**
3. **部署方式任选其一：**

   **A. 拖放部署（最简单）**
   - 将整个 `cook_web` 文件夹压缩成 zip
   - 直接拖放到 Netlify 部署区域
   
   **B. Git 部署**
   - 点击 "New site from Git"
   - 选择 GitHub，授权 Netlify 访问
   - 选择你的仓库
   - 自动部署

4. **自定义域名（可选）**
   - 在站点设置中可以修改子域名
   - 如：`my-cook-app.netlify.app`

### 方案三：Vercel（免费，极快部署）

1. **访问 [Vercel.com](https://vercel.com)**
2. **使用 GitHub 登录**
3. **导入项目**
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 Deploy

### 方案四：Gitee Pages（国内访问快）

1. **将代码推送到 [Gitee.com](https://gitee.com)**
2. **启用 Gitee Pages 服务**
3. **访问 `https://你的用户名.gitee.io/仓库名`**

### 方案五：服务器部署

```bash
# 上传到服务器
scp -r cook_web/ user@your-server.com:/var/www/html/

# Nginx 配置示例
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html/cook_web;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 🎯 推荐方案对比

| 平台 | 优势 | 访问速度 | 难度 |
|------|------|----------|------|
| **GitHub Pages** | 完全免费，与代码集成 | 国外快 | ⭐⭐ |
| **Netlify** | 功能强大，支持表单 | 全球快 | ⭐ |
| **Vercel** | 部署极快，性能优秀 | 全球快 | ⭐ |
| **Gitee Pages** | 国内访问快 | 国内快 | ⭐⭐ |

**最简单**：Netlify 拖放部署  
**最推荐**：GitHub Pages（学习 Git）  
**国内用户**：Gitee Pages

## 自定义修改

### 修改菜单
编辑 `script.js` 中的 `menuData` 数组：

```javascript
const menuData = [
    {
        id: 1,
        name: "菜品名称",
        description: "菜品描述",
        price: 28,
        category: "分类"
    },
    // 添加更多菜品...
];
```

### 修改样式
编辑 `styles.css` 文件来自定义：
- 颜色主题
- 字体样式
- 布局尺寸
- 动画效果

### 扩展功能
可以添加的功能：
- 用户注册登录
- 菜品图片上传
- 订单历史记录
- 支付集成
- 后台管理系统

## 许可证

MIT License

## 贡献

欢迎提交 Issues 和 Pull Requests！

---

*一个简单而强大的Today Eat What，让点菜变得更加便捷！* 🍽️