# Middleware 中介軟體練習

本專案的目的是實作出一個中介軟體，顯示出伺服器接收請求的時間、伺服器送出請求的時間和處理花費時間，並藉由實作的過程理解整個 request-response cycle 的流程。

<br>

## 專案功能

<br>

* 於接收請求時，在終端機印出接收請求的時間戳記、 HTTP 請求方法和發送請求的 URL
* 於送出回應時，在終端機印出送出回應的時間戳記、HTTP 請求方法、發送請求的 URL 和伺服
  器處理時間

* 範例如下：

<br>

```
2021-6-8 16:52:31 | GET from /
2021-6-8 16:52:31 | GET from / | total time: 38ms
```

<br>

## 建置環境

<br>

* node.js : v10.15.0
* express : v4.17.1

<br>

## 安裝執行方式

<br>

1. 使用 git clone 下載本專案

```
https://github.com/WilliamTsou818/middleware-practice.git
```

2. 開啟終端機，安裝執行專案所需相關套件

```
cd middleware-practice
npm install
```

3. 執行本專案

```
npm run dev
```

4. 跳出下列訊息時，表示專案啟動成功

Server is running on http://localhost:3000