//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

let a = prompt('Nhập vào số nguyên')

if ( a > 0) {
    alert('Số ' + a + ' '+ ' là số nguyên dương lớn hơn 0')
} if (a == 0) {
    alert('Số ' + a + ' ' + 'là số bằng 0')
} if (a < 0) {
    alert('Số' + a + 'là số nguyên âm nhỏ hơn 0')
}
