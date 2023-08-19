/** Bài 1Tính lương: 100*số ngày làm
 * Input
 * -Dom tới thẻ btn =>onclick
 * -Dom tới thẻ input lấy value
 * Xử lý
 * 100*value
 * * output
 * show kết quả
 */
var salary = document.getElementById("salary");
salary.onclick = function () {
  var num = document.getElementById("num").value;
  var tinh = 100 * num;

  var luong = "<p>Lương của bạn là " + tinh + " ngàn đồng</p>";
  var show = document.getElementById("show");
  show.innerHTML = luong;
};

/** Bài 2 Tính trung bình: tổng của 5 chia 5
 * Input
 * -Dom tới thẻ btn =>onclick
 * -Dom tới thẻ 5 input lấy value
 * Xử lý
 * convert từ string => number
 * tổng value
 * tổng chia 5
 * * output
 * show kết quả
 */
var b = document.getElementById("b");
b.onclick = function () {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;
  var num5 = document.getElementById("num5").value;

  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);
  num4 = Number(num4);
  num5 = Number(num5);

  var tong = num1 + num2 + num3 + num4 + num5;
  var TB = tong / 5;

  var ketqua = "Trung bình là " + TB;
  var in_ra = document.getElementById("in_ra");
  in_ra.innerText = ketqua;
};

/**Bài 3: Tính Quy đổi tiền
 * Input
 * -Dom tới thẻ btn =>onclick
 * -Dom tới thẻ input lấy value
 * Xử lý
 * value*23.500
 * * output
 * show kết quả
 */
var btn = document.getElementById("btn");
btn.onclick = function () {
  var usd = document.getElementById("usd").value;
  const a = 23.5;
  var tinh = a * usd;

  var convert = "<p>VND là " + tinh + " Đồng</p>";
  var output = document.getElementById("output");
  output.innerHTML = convert;
};

/**Bài 4: Diện tích, chu vi hình chủ nhật
 * Input
 * -Dom tới thẻ btn =>onclick
 * -Dom tới thẻ 2 input lấy value
 * Xử lý
 * diện tích: chiều dài *chiều rộng
 * chu vi: tổng của rộng và dài nhân 2
 * +convert  từ string => number
 * * output
 * show kết quả
 */
var s = document.getElementById("s");
s.onclick = function () {
  var wid = document.getElementById("wid").value;
  var hei = document.getElementById("hei").value;

  var dientich = wid * hei;

  var s_la = "Diện tích là " + dientich;
  var result_s = document.getElementById("result_s");
  result_s.innerText = s_la;
};

var c = document.getElementById("c");
c.onclick = function () {
  var wid = document.getElementById("wid").value;
  var hei = document.getElementById("hei").value;

  hei = Number(hei);
  wid = Number(wid);

  var tong = wid + hei;
  var chuvi = tong * 2;

  var c_la = "Chu vi là " + chuvi;
  var result_c = document.getElementById("result_c");
  result_c.innerText = c_la;
};

/**
 * Tính tổng kí tự
 * input
 * -Dom tới thẻ btn =>onclick
 * -Dom tới thẻ input lấy value
 ** process
 *tạo biến hằng chục = phần trăm dư / 10(làm tròn xuống math.float())
 *tạo biến hàng đơn vị =phần trăm dư %10
 * * output
 *  show kết quả
 */

var sum = document.getElementById("sum");
sum.onclick = function () {
  var kyso = document.getElementById("kyso").value;

  var chuc = Math.floor(kyso / 10);
  var donvi = kyso % 10;
  var tong = chuc + donvi;

  var imfo = "Tổng của 2 ký số là " + tong;
  var thongbao = document.getElementById("thongbao");
  thongbao.innerHTML = imfo;
};
