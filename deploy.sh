#!/bin/bash

echo "🚀 点菜小程序部署助手"
echo "===================="

# 检查是否已经初始化 Git
if [ ! -d ".git" ]; then
    echo "初始化 Git 仓库..."
    git init
    git add .
    git commit -m "初始化点菜小程序"
fi

echo ""
echo "选择部署方式："
echo "1. GitHub Pages"
echo "2. Netlify (拖放部署)"
echo "3. Vercel"
echo "4. Gitee Pages"
echo "5. 生成部署包"

read -p "请输入选项 (1-5): " choice

case $choice in
    1)
        echo ""
        echo "📋 GitHub Pages 部署步骤："
        echo "1. 在 GitHub 创建新仓库"
        echo "2. 复制以下命令并执行："
        echo ""
        echo "git remote add origin https://github.com/你的用户名/仓库名.git"
        echo "git branch -M main"
        echo "git push -u origin main"
        echo ""
        echo "3. 在 GitHub 仓库设置中启用 Pages"
        ;;
    2)
        echo ""
        echo "📦 正在生成 Netlify 部署包..."
        zip -r cook-web-netlify.zip . -x "*.git*" "deploy.sh"
        echo "✅ 部署包已生成：cook-web-netlify.zip"
        echo "请访问 https://netlify.com 并拖放此文件到部署区域"
        ;;
    3)
        echo ""
        echo "📋 Vercel 部署步骤："
        echo "1. 将代码推送到 GitHub"
        echo "2. 访问 https://vercel.com"
        echo "3. 使用 GitHub 登录并导入项目"
        ;;
    4)
        echo ""
        echo "📋 Gitee Pages 部署步骤："
        echo "1. 在 Gitee 创建新仓库"
        echo "2. 推送代码到 Gitee"
        echo "3. 在仓库设置中启用 Gitee Pages 服务"
        ;;
    5)
        echo ""
        echo "📦 正在生成部署包..."
        zip -r cook-web-deploy.zip . -x "*.git*" "deploy.sh"
        echo "✅ 部署包已生成：cook-web-deploy.zip"
        echo "可以上传到任何静态网站托管服务"
        ;;
    *)
        echo "无效选项，请重新运行脚本"
        ;;
esac

echo ""
echo "🔗 部署完成后，你的网站将可以通过以下方式访问："
echo "- GitHub Pages: https://你的用户名.github.io/仓库名"
echo "- Netlify: https://随机名称.netlify.app (可自定义)"
echo "- Vercel: https://仓库名.vercel.app"
echo "- Gitee Pages: https://你的用户名.gitee.io/仓库名"