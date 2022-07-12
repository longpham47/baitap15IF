/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * 3 số dương (num1, num2, num3, được lấy ra từ form)
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến num1, num2, num3 và biến để đếm số chẵn
 * B2: Gan giá trị cho biến c = 0, các biến còn lại lấy từ form
 * B3: Lập công thức tính toán
 *     - Nếu num1 % 2 ==0 thì num1 là số chắn count++
 *     - lặp lại với 2 số còn lại
 *     - số lượng số lẻ = 3- count
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  document.getElementById('dem').innerHTML
 */


function chanLe() {
    var num1 = document.getElementById("somot").value;
    var num2 = document.getElementById("sohai").value;
    var num3 = document.getElementById("soba").value;
    console.log(num1, num2, num3);
    var count = 0;
    if (num1 % 2 == 0) {
        count++

    } else {
        count;
    }
    if (num2 % 2 == 0) {
         count++

    } else {
        count;
    }
    if (num3 % 2 == 0) {
        count++

    } else {
        count;
    }
    document.getElementById("txtResult").innerHTML = "có " + count + " số chẳn ; có " + (3 - count) + " số lẻ";
}
document.getElementById("btn").onclick = chanLe;
