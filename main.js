/**
 * Bài 1:Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
 * Đầu vào:
 * - Gán giá trị cho 3 số người nhập là a, b, c
 * Xử Lý:
 * - So sánh số nào lớn đứng trước số nhỏ hơn
 * - Có 6 trường hợp:
 * + a > b > c => a,b,c
 * + a > c > b => a,c,b
 * + b > a > c => b,a,c
 * + b > c > a => b,c,a
 * + c > a > b => c,a,b
 * + c > b > a => c,b,a
 * Đầu ra:
 * - Xuất ra màn hình kết quả
 */
document.getElementById("btnBai1").onclick = function () {
  //Đầu vào
  var a = document.getElementById("txtNumber1").value * 1;
  var b = document.getElementById("txtNumber2").value * 1;
  var c = document.getElementById("txtNumber3").value * 1;
  var ketQua;
  //Xử lý
  // a > b
  if (a >= b && a >= c) {
    if (b >= c) {
      ketQua = "Thứ tự là: " + c + " ," + b + " ," + a;
    } else {
      ketQua = "Thứ tự là: " + b + " ," + c + " ," + a;
    }
  } else if (b >= a && b >= c) {
    if (a >= c) {
      ketQua = "Thứ tự là: " + c + " ," + a + " ," + b;
    } else {
      ketQua = "Thứ tự là: " + b + " ," + c + " ," + b;
    }
  } else if (c >= a && c >= b) {
    if (a >= b) {
      ketQua = "Thứ tự là: " + b + " ," + a + " ," + c;
    } else {
      ketQua = "Thứ tự là: " + a + " ," + b + " ," + c;
    }
  }
  //Đầu ra
  document.getElementById("footerBai1").innerHTML = ketQua;
};

/**
 * Bài 2:Viết chương trình “Chào hỏi” các thành viên trong gia đình
 * Đầu vào:
 * - Lấy thông tin người dùng đăng nhập
 * Xử lý:
 * - Nếu người dùng là bố => chào bố
 * - Nếu người dùng là mẹ => chào mẹ
 * - Nếu người dùng là anh => chào anh
 * - Nếu người dùng là em => chào em
 * Đầu ra:
 * - Xuất ra màn hình câu trả lời
 */
document.getElementById("btnBai2").onclick = function () {
  //Đầu vào
  var valueBai2 = document.getElementById("txtValueBai2").value;
  var ketQua;
  //Xử lý
  if (valueBai2 == "B") {
    ketQua = "Xin chào Bố!";
  } else if (valueBai2 == "M") {
    ketQua = "Xin chào Mẹ!";
  } else if (valueBai2 == "A") {
    ketQua = "Xin chào Anh trai!";
  } else if (valueBai2 == "E") {
    ketQua = "Xin chào Em gái!";
  }
  //Đầu ra
  document.getElementById("footerBai2").innerHTML = ketQua;
};

/**
 * Bài 3:Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
 * Đầu vào:
 * - Lấy giá trị 3 số nguyên a, b, c
 * Xử lý:
 * - Số chẵn chia hết cho 2 (%2==0), Ngược lại số lẻ
 * => Có 4 TH:
 * + 3 chẵn 0 lẻ (a%2 && b%2 && c%2)
 * + 2 chẵn 1 lẻ (a%2 && b%2 || a%2 && c%2 || b%2 && c%2)
 * + 1 chẵn 2 lẻ (a%2 || b%2 || c%2)
 * + 0 chẵn 3 lẻ (còn lại)
 * Đầu ra:
 * - Xuất ra màn hình kết quả
 */
document.getElementById("btnBai3").onclick = function () {
  //Đầu vào
  var a = document.getElementById("txtNumber3_1").value;
  var b = document.getElementById("txtNumber3_2").value;
  var c = document.getElementById("txtNumber3_3").value;
  var ketQua;
  //Xử Lý
  if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    ketQua = "Có 3 chẵn 0 lẻ";
  } else if (
    (a % 2 === 0 && b % 2 === 0) ||
    (a % 2 === 0 && c % 2 === 0) ||
    (b % 2 === 0 && c % 2 === 0)
  ) {
    ketQua = "Có 2 chẵn 1 lẻ";
  } else if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    ketQua = "Có 1 chẵn 2 lẻ";
  } else {
    ketQua = "Có 0 chẵn 3 lẻ";
  }
  console.log(a, b, c);
  //Đầu ra
  document.getElementById("footerBai3").innerHTML = ketQua;
};

/**
 * Bài 4:Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
 * Đầu vào:
 * - Lấy giá trị của 3 cạnh tam giác
 * Xử Lý:
 * - So sánh các cạnh:
 * + Nếu 3 cạnh bằng nhau => Tam giác đều
 * + Nếu 2 cạnh bằng nhau => Tam giác cân
 * + Cả 3 cạnh khác nhau => Tam giác vuông
 * Đầu ra:
 * - Xuất ra màn hình cho biết tam giác đó là gì
 */

document.getElementById("btnBai4").onclick = function () {
  //Đầu vào
  var a = document.getElementById("txtNumber4_1").value * 1;
  var b = document.getElementById("txtNumber4_2").value * 1;
  var c = document.getElementById("txtNumber4_3").value * 1;
  var ketQua;
  //Xử lý
  if (a == b && a == c) {
    ketQua = "Là Tam Giác Đều";
  } else if ((a == b && a != c) || (a == c && a != b) || (a != b && b == c)) {
    ketQua = "Là Tam Giác Cân";
  } else {
    ketQua = "Là Tam Giác Vuông";
  }
  //Đầu ra
  document.getElementById("footerBai4").innerHTML = ketQua;
};
