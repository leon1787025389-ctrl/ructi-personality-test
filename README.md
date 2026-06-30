# RUCTI 毕业人格测试

一个移动端优先的纯静态网页测试产品。用户完成 12 道正式题和 1 道隐藏彩蛋题后，获得一个 RUC 毕业人格结果，并可生成带二维码的分享图。

## 本地预览

```bash
python3 -m http.server 8080
```

然后打开：

```text
http://127.0.0.1:8080/
```

## 部署说明

这是一个纯静态站点，不需要后端、数据库或构建步骤。

- Vercel：导入 GitHub 仓库即可，Build Command 留空，Output Directory 设为项目根目录。
- 阿里云 OSS / CDN：上传整个仓库内的静态文件，入口文件为 `index.html`。

## 后续修改位置

- 题目、选项、计分：`src/config/questions.js`
- 人格结果、描述、祝福、图片：`src/config/results.js`
- 结果映射：`src/config/resultMap.js`
- 页面样式：`src/styles.css`
- 分享图和二维码：`src/main.js`、`src/utils/qr.js`
