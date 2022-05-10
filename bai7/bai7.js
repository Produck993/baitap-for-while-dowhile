//Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
/*Phí thuê bao bắt buộc là 25 nghìn.
600 đồng cho mỗi  phút gọi của 50 phút đầu tiên.
400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên*/

let phicodinh = 25000;
let thoiluong = prompt("Nhập thời lượng cuộc gọi trong thời gian vừa rồi !");
let cuocphi;

if (thoiluong <=50) {
    alert(Cuocphi = "Giá cước cuộc gọi là :" + thoiluong*600 + "vnđ")
}if (thoiluong <=150) {
    alert(Cuocphi ="Giá cước cuộc gọi là :" + thoiluong*400 + "vnđ")
}if (thoiluong <=200) {
    alert(Cuocphi ="Giá cước cuộc gọi là :" + thoiluong*200 + "vnđ")
}