---
layout: post
title:  "Cấu trúc rẽ nhánh trong C"
date:   2016-07-29
categories: [Ngôn ngữ C]
tags: [ngôn ngữ c, rẽ nhánh]
redirect_to:
  - https://aicurious.io/posts/cau-truc-re-nhanh/
---

Cấu trúc rẽ nhánh trong mỗi ngôn ngữ lập trình luôn luôn là một thành phần quan trọng. Đó là thành phần cơ bản tạo nên hầu hết các thuật toán hiện đại. Nếu bạn muốn mô tả một đoạn chương trình kiểu như: *Nếu gặp điều kiện C thì thực hiện hành động A, ngược lại, thực hiện hành động B* thì bạn chắc chắn cần sử dụng cấu trúc rẽ nhánh.

### 1. Cấu trúc rẽ nhánh dạng `if…else` (nếu… thì…)

*** Dạng đơn giản nhất: **

~~~c
if (<điều kiện>) <hành động> 
~~~

/* Nếu `<điều kiện>` đúng thì thực hiện `<hành động>`

`<hành động>` thông thường là một khối lệnh, được đặt trong cặp dấu { } */

**Chương trình ví dụ:**

~~~c
#include <stdio.h>
int main()
{
	int a = 5;
	if (a > 0) {
		printf("%d la so duong\n",a);
	}
	if (a < 0) {
		printf("%d la so am\n",a);
		printf("a nho hon 0");
	}
	return 0;
}
~~~

*** Dạng mở rộng `if…else:`**

~~~c
if (<điều kiện>)
	<hành động 1>
else
	<hành động 2>
~~~

/* Nếu `<điều kiện>` đúng thì thực hiện `<hành động 1>` ; nếu `<điều kiện>` sai thì thực hiện `<hành động 2>`*/

**Chương trình ví dụ:**

~~~c
#include <stdio.h>
int main() {
	int a = -5;
	if (a > 0)
		printf("%d > 0\n",a);
	else {
		printf("%d >= 0\n", a);
		printf("%d khong la so duong\n",a);
	}
	return 0;
}
~~~

*** Dạng mở rộng if…else if…else:**

~~~c
if (<điều kiện 1>)
	<hành động 1>
else if (<điều kiện 2>)
	<hành động 2>
else
	<hành động 3>
~~~

/* Nếu `<điều kiện 1>` đúng thì thực hiện `<hành động 1>` ; nếu `<điều kiện 1>` sai -\> tiến hành kiểm tra `<điều kiện 2>`: `<điều kiện 2>` đúng sẽ thực hiện `<hành động 2>`; nếu  `<điều kiện 1>` và `<điều kiện 2>` đều sai thì thực hiện `<hành động 3>` */


**Chương trình ví dụ:**

~~~c
#include <stdio.h>
int main() {
	int a = 5;
	printf("Nhap so nguyen a: ");
	scanf("%d",&a);

	if (a > 0)
		printf("a la so duong\n");
	else if (a < 0)
		printf("a la so am\n");
	else
		f("a = 0");
	return 0;
}
~~~

Các bạn chạy đoạn chương trình với các giá trị a khác nhau xem sao nhé.

### 2. Cấu trúc rẽ nhánh switch case

Cú pháp:

~~~c
switch (<biểu thức nguyên>) {
	case <giá trị 1>: <hành động 1>; break; /* có thể không có câu lệnh này*/
	case <giá trị 2>: <hành động 1>; break; /* có thể không có câu lệnh này*/
	....
	default: <hành động mặc định>; break; /* có thể không có câu lệnh này*/
}
~~~

• Khi một cấu trúc rẽ nhánh switch được thực thi, chương trình sẽ tính toán giá trị của biểu thức. Kết quả thu được phải là kiểu nguyên (ta có thể ép kiểu cho nó. Xem [Toán tử trong C]({{ site.url }}{{ site.baseurl }}/ngon-ngu-c/toan-tu-trong-c/) để biết cách ép kiểu). Tiếp đó nó so sánh kết quả thu được với các giá trị 1,2… , khi tìm thấy một giá trị bằng với kết quả thu được ở trên, nó thực hiện cách lệnh từ sau dấu : tương ứng cho tới cuối cấu trúc switch hoặc tới khi bắt gặp lệnh break;
 • Trường hợp không tìm thấy giá trị nào bằng với giá trị biểu thức, <hành động mặc định> được thực hiện.

**Ví dụ về chương trình in ra cách đọc của một chữ số: (từ 0 -> 9)**

~~~c
#include < stdio.h >
int main() {
	int chuSo;
	printf("Nhap chu so: ");
	scanf("%d", & chuSo);
	switch (chuSo) {
		case 0:
			printf("Khong");
			break;
		case 1:
			printf("Mot");
			break;
		case 2:
			printf("Hai");
			break;
		case 3:
			printf("Ba");
			break;
		case 4:
			printf("Bon");
			break;
		case 5:
			printf("Nam");
			break;
		case 6:
			printf("Sau");
			break;
		case 7:
			printf("Bay");
			break;
		case 8:
			printf("Tam");
			break;
		case 9:
			printf("Chin");
			break;
		default:
			printf("Khong phai chu so!");
	}
	return 0;
}
~~~
