---
layout: post
title:  "Cấu hình Emacs để lập trình C"
date:   2016-09-02
categories: [Ngôn ngữ C, Emacs]
tags: [ngôn ngữ c, Emacs, editor]
bigimg: images/ngon-ngu-c/shareimg.jpg
redirect_to:
  - https://aicurious.io/posts/cau-hinh-emacs-de-lap-trinh-c/
---

Link hướng dẫn cài đặt và sử dụng các chức năng: [http://tuhdo.github.io/c-ide.html](http://tuhdo.github.io/c-ide.html)

Sau đây là vài thứ cơ bản ko cần đọc cái bên trên cài và dùng luôn đã >>

Anh em thực hiện cài đặt:

Mở **Terminal**, gõ lệnh:

`git clone https://github.com/tuhdo/emacs-c-ide-demo.git ~/.emacs.d`

Nếu hiện thông báo đã tồn tại thư mục ` ~/.emacs.d` (thư mục cấu hình của emacs) thì ae gõ lệnh sau để xóa nó (có thể gần nhập pass su); và gõ lại lệnh trên.

`sudo rm -r ~/.emacs.d`

Vậy là mở Emacs lên sử dụng thôi (Lưu ý là lần đầu mở lại nó phải cài đặt một số thứ nên chịu khó chờ chút. Những lần sau sẽ nhanh hơn) >>

`emacs&`

![Emacs]({{ site.url }}{{ site.baseurl }}/assets/images/ngon-ngu-c/emacs.png)

Vừa mở lên C-x C-f tạo file mới (file mã nguồn ngôn ngữ C có đuôi .c nhé), ae thấy ngay cái file browser ngon hơn cái mặc định rồi.

Khi biên dịch ấn F5 là ok thôi. Nhưng đợi chút. Khi biên dịch ta phải viết cái Makefile – file cấu hình biên dịch và thực thi của dự án. Cái này không phải đồ thừa mà hầu hết các dự án C thực tế đều cần nhé.

### 2. Viết Makefile, biên dịch, chạy:

Tạo 1 file có tên ‘Makefile’ cùng thư mục với file mã nguồn. Cái này chứa các lệnh biên dịch và thực thi để ae không phải gõ lại mỗi lúc cần dịch và chạy chương trình nhé.

Nội dung Makefile cơ bản nhất cho biên dịch C:

~~~
build:
	gcc -o hello hello.c
run:
	./hello
~~~

Thay hết hello thành tên file mã nguồn tương ứng nhé.

Nếu ae muốn ấn F5 vừa biên dịch xong chạy luôn chương trình trong cửa sổ emacs như hình dưới thì sử dụng Makefile như sau (thay tên hello > tên file nguồn của bạn):

~~~
build:
	gcc -o hello hello.c && ./hello
run:
	./hello
~~~

Bonus thêm nội dung chương trình mẫu V.A sử dụng:

~~~c
#include <stdio.h>
int main(){
	printf("Hello Viet Anh");
}
~~~

![Cấu hình Emacs để lập trình C]({{ site.url }}{{ site.baseurl }}/assets/images/ngon-ngu-c/emacs-start.png)

Trên đây là cơ bản cấu hình Emacs cho người mới bắt đầu. Đọc thêm các chức năng khác của bộ cấu hình chúng ta vừa sử dụng tại đây nhé: [http://tuhdo.github.io/c-ide.html](http://tuhdo.github.io/c-ide.html)

Tìm hiểu thêm về Makefile: [https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_makeassets/images.html](https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_makeassets/images.html)
