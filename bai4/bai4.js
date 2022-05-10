//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

let a = prompt('Nhập số a')
let b = prompt('Nhập số b')
let c = prompt('Nhập số c')
if (a > b) {
    if (a > c) {
        alert('A là số lớn nhất')
    } else {
        alert('C là số lớn nhất')
    }
} else {
    if (c < b) {
        alert('B là số lớn nhất')
    } else {
        alert('C là số lớn nhất')
    }
}