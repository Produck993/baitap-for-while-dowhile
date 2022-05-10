//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
/*5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
20 % nếu tổng doanh số là lớn hơn 300 triệu.*/

let doanhso = parseInt(prompt('Nhập vào danh số bán hàng'));
let ketqua;
if (doanhso = null) {
    alert('Yêu cầu nhập số tiền')
}
if (doanhso <= 100000000) {
    alert (ketqua = "Hoa hồng bằng " +  doanhso * 5/100 + " " + "VND")
}; if (doanhso <= 300000000) {
    alert (ketqua = "Hoa hồng bằng " + doanhso *10/100 + " "+ "VND")
} else {
    alert (ketqua = "Hoa hồng bằng " + doanhso *20/100 + " "+ "VND")
}