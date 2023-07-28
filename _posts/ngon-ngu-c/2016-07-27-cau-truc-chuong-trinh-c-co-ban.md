---
layout: post
title:  "Cấu trúc chương trình C cơ bản"
date:   2016-07-27
categories: [Ngôn ngữ C]
tags: [ngôn ngữ c, cấu trúc chương trình, hello world]
redirect_to:
  - https://aicurious.io/posts/cau-truc-chuong-trinh-c-co-ban/
---

**Các thành phần của một chương trình C cơ bản bao gồm:**

* Các lệnh tiền xử lí
* Các hàm
* Các biến
* Các lệnh và biểu thức
* Các comment (ghi chú về code giúp ích cho công tác bảo trì và nâng cấp)

Chúng ta hãy cùng nghiên cứu chương trình Hello World – Chào thế giới trong ngôn ngữ C. Chương trình này có chức năng in dòng chữ “Hello World!” lên màn hình máy tính. Tên thành phần của chương trình đã được tôi comment bên cạnh mỗi dòng code (sử dụng cặp dấu /* */). Bạn cũng có thể sử dụng cặp // để đánh dấu phần sau đó cho tới cuối dòng code là comment.

**Mã nguồn:**

~~~c
#include <stdio.h>
/* Đây là lệnh tiền xử lí, thông báo cho trình biên dịch biết
chương trình của chúng ta sử dụng thư viện stdio.h */
int main() {  //Hàm main - nơi chương trình C bắt đầu thực thi
	printf("Hello World! n");  //Câu lệnh in ra dòng chữ Hello World!
	return 0; //Giá trị trả về của hàm
}
~~~

Các bạn hãy Copy toàn bộ các dòng code trên, paste vào Geany và lưu lại dưới tên hello.c nhé. (file mã nguồn chương trình ngôn ngữ C có đuôi .c ).

Tiếp đó chọn menu **Build > Build (F9)** để biên dịch. Và **Build > Excute (F5)** để chạy chương trình đã biên dịch nhé.

![Biên dịch chương trình C]({{ site.url }}{{ site.baseurl }}/assets/images/ngon-ngu-c/bien-dich-Hello-world-c.png)
