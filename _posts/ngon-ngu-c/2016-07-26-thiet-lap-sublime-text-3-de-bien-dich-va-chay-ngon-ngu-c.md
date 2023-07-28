---
layout: post
title:  "Thiết lập Sublime Text 3 để biên dịch và chạy ngôn ngữ C"
date:   2016-07-26
categories: [Ngôn ngữ C, Sublime Text]
tags: [ngôn ngữ c, Sublime Text, editor]
---

## 1. Trước hết bạn phải tải và cài đặt Sublime Text 3:

[Xem hướng dẫn cài đặt Sublime text 3]({{ site.url }}{{ site.baseurl }}/huong-dan-cai-dat-sublime-text-3).

## 2. Tiếp đó cài đặt gcc để biên dịch ngôn ngữ c:
Mở **Terminal** (Ctrl + Alt +t) và gõ lần lượt các lệnh sau để cài đặt gói **build-essential**:

~~~shell
sudo apt-get update
sudo apt-get install build-essential
~~~

## 3. Cấu hình Build system cho Sublime Text để biên dịch và chạy C:
Mở **Sublime Text 3**, chọn menu **Tools > Build System > New Build System…**

Chèn đoạn mã sau và lưu lại dưới tên **GCC.sublime-build**

~~~js
{
"shell_cmd" : "gcc $file_name -o ${file_base_name}",
"working_dir" : "$file_path",
"variants":
  [
    {
      "name": "Run",
      "shell_cmd": "gcc $file_name -o ${file_base_name} &amp;&amp; ${file_path}/${file_base_name}"
    }
  ]
}
~~~

![Build C trong Sublime Text 3]({{ site.url }}{{ site.baseurl }}/assets/images/ngon-ngu-c/Bien-dich-c-Sublime-Text-3.png)

![Lưu build file C trong Sublime Text 3]({{ site.url }}{{ site.baseurl }}/assets/images/ngon-ngu-c/Luu-build-file-c-Sublime-Text-3.png)