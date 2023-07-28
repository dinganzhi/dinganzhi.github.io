---
layout: post
title:  "Biến, hằng và nhập xuất dữ liệu trong C"
date: 2016-07-28
categories: [Ngôn ngữ C]
tags: [ngôn ngữ c, biến hằng, nhập xuất]
redirect_to:
  - https://aicurious.io/posts/bien-hang-va-nhap-xuat-du-lieu-trong-c/
---

### 1. Biến, hằng:

> Biến, hằng giống như những chiếc hộp có tên riêng mà chúng ta có thể để dữ liệu vào và mang ra mỗi khi chúng ta cần sử dụng. Biến khác hằng ở chỗ giá trị lưu trữ trong biến có thể thay đổi trong quá trình thực hiện chương trình; còn giá thị của hằng thì được định nghĩa ngay từ đầu chương trình, không thay đổi trong suốt quá trình thực hiện chương trình.

#### Các quy tắc đặt tên biến, hằng:

Tên biến, tên hằng:

- **Chỉ** chứa các chữ cái, chữ số và kí tự gạch dưới ( _ ) trong [bảng mã ASCII](https://vi.wikipedia.org/wiki/ASCII).
- **Phải** bắt đầu bằng một chữ cái hoặc kí tự gạch dưới.
- **Không** được trùng với các từ khóa trong ngôn ngữ C.
- **Phân biệt hoa thường.** C là ngôn ngữ phân biệt hoa thường, do vậy biến **aBc** và **abc** là khác nhau trong C.

Danh sách các từ khóa trong ngôn ngữ C:

| break | enum | register | typedef |
| case | extern | return | union |
| char | float | short | unsigned |
| const | for | signed | void |
| continue | goto | sizeof | volatile |
| default | if | static | while |
| do | int | struct | \_Packed |
| double |

**Ví dụ:**

- **Tên đúng: **abc, Abc, abc123, _abc
- **Tên sai:** 1abc *(tên sai do bắt đầu bằng số)*, b@c *(tên sai do chứa kí tự @ không được phép), *case *(tên sai do trùng với từ khóa).*

#### Khai báo biến:

Vị trí khai báo: Biến thường được khai báo ở đầu chương trình, đầu hàm hoặc khối lệnh.

Có 2 loại biến theo vị trí khai báo:

- Biến toàn cục: biến khai báo ở ngoài các hàm, các khối lệnh. Chu trình sống của chúng từ lúc bắt đầu chương trình tới khi kết thúc chương trình.
- Biến cục bộ: biến khai báo bên trong các hàm, các khối lệnh. Chu trình sống từ khi bắt đầu khối lệnh tới khi khối lệnh được thực hiện xong.

Cú pháp khai báo biến:

~~~c
 <kiểu dữ liệu> <danh sách biến>;
~~~

(Biến trong ngôn ngữ C luôn gắn liền với một kiểu dữ liệu).

**Ví dụ:**

~~~c
int i,j; /* Khai báo biến i,j kiểu số nguyên */
char ch; /* Khai báo biến ch kiểu chữ cái ASCII */
char name[100]; /* Khai báo xâu kí tự tên name với độ dài lớn nhất là 100 kí tự */ 
i = j = 0; /* Gán giá trị 0 cho 2 biến i,j */
ch = 'A'; /* Gán giá trị chữ cái A in hoa cho biến ch */
~~~

#### Khai báo hằng:

Khai báo hằng thực hiện ở đầu chương trình.

**Cách 1: Sử dụng bộ tiền xử lí:**

~~~c
#define <tên hằng> <giá trị của hằng>;
~~~

**Cách 2:**

~~~c
const <kiểu dữ liệu> <tên hằng> = <giá trị của hằng>;
~~~

Trên thực tế tên hằng thường được viết in hoa.

#### Phân chia các kiểu giá trị trong ngôn ngữ C:

| STT | Kiểu và miêu tả |
|---|---|
|1| **Kiểu cơ bản:  **Là các kiểu dữ liệu số học và bao gồm 2 kiểu chính: a) kiểu số nguyên và b) kiểu số thực dấu chấm động. |
|2| **Kiểu liệt kê:  **Đây là các kiểu số học và được dùng để định nghĩa các biến mà nó có thể được gán trước một số lượng nhất định giá trị số nguyên qua suốt chương trình. |
|3| **Kiểu void:  **Kiểu định danh \*void\* là kiểu đặc biệt thể hiện rằng không có giá trị nào.|
|4| **Kiểu phát triển từ cơ bản:  **Bao gồm các kiểu : a) con trỏ, b) kiểu mảng, c) kiểu cấu trúc, d) kiểu union và e) kiểu function (hàm).  |

**Bảng các kiểu nguyên:**

| Kiểu           | Kích thước biến | Khoảng giá trị                                           |
|----------------|-----------------|----------------------------------------------------------|
| char           | 1 byte          | -128 tới 127 hoặc 0 tới 255                              |
| unsigned char  | 1 byte          | 0 tới 255                                                |
| signed char    | 1 byte          | -128 tới 127                                             |
| int            | 2 hoặc 4 bytes  | -32,768 tới 32,767 hoặc -2,147,483,648 tới 2,147,483,647 |
| unsigned int   | 2 hoặc 4 bytes  | 0 tới 65,535 hoặc 0 tới 4,294,967,295                    |
| short          | 2 bytes         | -32,768 tới 32,767                                       |
| unsigned short | 2 bytes         | 0 tới 65,535                                             |
| long           | 4 bytes         | -2,147,483,648 tới 2,147,483,647                         |
| unsigned long  | 4 bytes         | 0 tới 4,294,967,295                                      |


**Bảng các kiểu số thực dấu phẩy động:**

| Kiểu        | Kích thước biến | Khoảng giá trị          | Độ chính xác        |
|-------------|-----------------|-------------------------|---------------------|
| float       | 4 byte          | 1.2E-38 tới 3.4E+38     | 6 vị trí thập phân  |
| double      | 8 byte          | 2.3E-308 tới 1.7E+308   | 15 vị trí thập phân |
| long double | 10 byte         | 3.4E-4932 tới 1.1E+4932 | 19 vị trí thập phân |

**Một số kí tự điều khiển:**

- `\n` : Xuống dòng
- `\t` : Tab ngang (tạo khoảng trắng giống như khi bạn ấn phím Tab trên bàn phím trong soạn thảo văn bản)
- `\r` : Nhảy về đầu hàng
- `\a` : Kêu Bip
- `\\` : In ra dấu \
- `\”` : In ra dấu “
- `\’` : In ra dấu ‘
- `%%` : In ra dấu %

### 2. Nhập xuất dữ liệu trong C:

Để nhập xuất cơ bản trong C, ta sử dụng 2 hàm tiêu chuẩn, được định nghĩa trong thư viện `<stdio.h>`.

- Hàm **printf()** để in ra thiết bị xuất tiêu chuẩn (màn hình).
- Hàm **scanf()** để nhận giá trị từ thiết bị nhập tiêu chuẩn (bàn phím) và lưu vào các biến.

**Ví dụ về chương trinh nhập một số và in ra số vừa nhập:**

~~~c
#include <stdio.h>;
int main() {
	float x;
	printf("blog.vietanhdev.com\n");
	printf("Nhap vao mot so: ");
	scanf("%f",&x);
	printf("So ban vua nhap la: %f", x);
	return 0;
}
~~~

#### a) In dữ liệu ra màn hình:

**Cú pháp:** `printf(“xâu kí tự…”, <các biến và các số>);`

Việc sử dụng đơn giản nhất là in ra một xâu kí tự: “Xin chao cac ban!”:

~~~c
printf("Xin chao cac ban!");
~~~

**Vậy bạn muốn in một biến chứa dữ liệu ra màn hinh thì sao?**

Ví dụ về in biến chứa 1 số nguyên ra màn hình:

~~~c
int number = 12;
printf ("So duoc in ra: %d",number);
~~~

Để in giá trị của các biến, số ra màn hình, ta phải sử dụng các đặc tả định dạng bắt đầu với % như trên nhằm đại diện cho các biến, số (%d đại diện cho biến số nguyên number).  Các đặc tả định dạng này không được in ra màn hình mà được thay thế bởi các biến, các số đằng sau.

**Một số đặc tả định dạng cơ bản:**

- `%d`: số nguyên hệ 10 có dấu
- `%u`: số nguyên hệ 10 không dấu
- `%x`: số nguyên hệ 16
- `%o`: số nguyên hệ bát phân
- `%s`: xâu kí tự
- `%c`: một kí tự đơn
- `%f`: số chấm động cố định
- `%e`: số chấm động (ký hiệu có số mũ)
- `l` : Tiền tố dùng kèm với `%d`, `%x`, `%o` để chỉ số nguyên dài (ví dụ `%ld`)

**Chú ý:**

- Ta có thể sử dụng đặc tả định dạng để in dữ liệu sang kiểu khác:
    - Ví dụ:

~~~c
char ch = "A";
printf ("%d\n", ch); /* In ra 65 */
printf ("%c\n", ch); /* In ra A */
~~~

- Để in ra kí tự % ta dùng %%.

**Định dạng dữ liệu in ra:**

`% [-] [fwidth] [.p]` trong đó:
 • `[fwidth]` chiều rộng
 • `[-]` căn lề trái
 • `[.p]` số kí tự được in ra

**Ví dụ:**

| ** Giá trị** | **Đặc tả định dạng** | **Kết quả**|
|--------------|------------------|-----------|
|  42          |  %6d             |     42    |
|  42          |  %-6d            |     42    |
|  ‘z’         |  %3c             |      z    |
| 2.71828      | %10.2f           |   2.71    |
| “printf”     | %10s             | printf    |


#### b) Nhập dữ liệu từ bàn phím:

**Cú pháp:** `scanf (“xâu kí tự…”, <các con trỏ>);`

Ví dụ ta muốn nhập một số nguyên vào biến a:

~~~c
int a; scanf("%d", &a);
~~~

**Lưu ý:**ở đây `&a` là con trỏ trỏ tới biến a.

**Chú ý khi nhập xâu kí tự chứa dấu cách (space):**

Trước khi đọc xâu, chúng ta phải làm sạch bộ đệm bàn phím vì có thể quá trình đọc dữ liệu trước còn lưu lại. Trên Windows chúng ta có lệnh `fflush(stdin);` , tuy nhiên nó đã bộc lộ khá nhiều hạn chế, nhất là không thể dùng trên Linux nên tôi không sử dụng ở đây. Chúng ta sẽ dùng đoạn lệnh sau trước lệnh nhập vào một chuỗi:

~~~c
int c;
while ( ( c = getchar() ) != EOF && c != '\n' );
~~~

Hoặc

~~~c
scanf ( "%*[^\n]" );
scanf ( "%*c" );
~~~

**Cách 1:** Ta dùng lệnh:

~~~c
fgets (name, 100, stdin);
~~~

với 100 là độ dài lớn nhất của xâu kí tự bạn muốn nhập vào (bạn có thể thay đổi nó) và name là tên biến xâu kí tự. Việc đọc này sẽ lưu vào biến name cả kí tự xuống dòng ở cuối xâu (khi bạn ấn enter để kết thúc nhập xâu là truyền vào bộ đệm kí tự xuống dòng).

**Cách 2:** Ta dùng lệnh:

~~~c
scanf ("%[^\n]%*c", name);
~~~

với `name` cũng là tên biến xâu kí tự. Đọc cách này sẽ loại bỏ kí tự xuống dòng ở cuối xâu.
