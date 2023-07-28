---
layout: post
title:  "Cài đặt Geany – gcc làm môi trường soạn thảo và biên dịch ngôn ngữ C trên Ubuntu"
date:   2016-07-27
categories: [Ngôn ngữ C]
tags: [ngôn ngữ c, geany, editor]
redirect_to:
  - https://aicurious.io/posts/geany-gcc-bien-dich-c-tren-linux-ubuntu/
---

Trong bài viết này Việt Anh sẽ hướng dẫn các bạn cài Geany và gcc  để soạn thảo và biên dịch chương trình viết bằng ngôn ngữ C trên Linux (cụ thể ở đây là hệ điều hành Ubuntu).

## 1.Trước hết bạn phải tải và cài đặt Geany:

Mở Terminal (Ctrl + Alt +t) và gõ lần lượt các lệnh sau để cài đặt trình soạn thảo mã nguồn Geany:

~~~shell
sudo apt-get update
sudo apt-get install geany
~~~

## 2.Tiếp đó cài đặt gcc để biên dịch ngôn ngữ c:

Gõ lệnh sau để cài đặt gói build-essential:

~~~shell
sudo apt-get install build-essential
~~~

## 3.Sử dụng Geany để soạn thảo mã nguồn và biên dịch code C:

Tất cả bạn cần làm là ấn F9 để biên dịch chương trình. Và F5 để chạy chương trình nếu biên dịch thành công.