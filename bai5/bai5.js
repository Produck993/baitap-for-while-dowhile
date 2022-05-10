//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
let dtb = prompt("Nhập số điểm trung bình")

if (dtb >=9) {
    alert('Đạt hạng A')
} if (dtb >=7 && dtb < 9) {
    alert(' Đạt hạng B')
} if ( dtb >= 5 && dtb < 7) {
    alert('Đạt hạng C')
} else {
    alert('Đạt hạng F')
}