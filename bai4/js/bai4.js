/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * Chiều dài 3 cạnh (canh1, canh2 ,canh3 , được lấy ra từ form)
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến canh1, canh2 ,canh3
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Nếu canh1 == canh2 && canh2 == canh3 thì đó là tam giác đều
 *     - Nếu canh1 == canh2 || canh2 == canh3 || canh1 == canh3
 *       thì đó là tam giác cân
 *     - canh3 = Math.sqrt(Math.pow(canh1,2) + Math.pow(canh2,2)); =>> tam giac vuong
 *     - cả 3 trường hợp đều sai thì đó là loại tam giác khác
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  document.getElementById('ketQua').innerHTML
 */


function tamGiac() {
    var canh1 = document.getElementById("somot").value;
    var canh2 = document.getElementById("sohai").value;
    var canh3 = document.getElementById("soba").value;
    var key
    if (canh1 == canh2 && canh2 == canh3) {
        key = "tam giác đêu";
    } else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
        key = "tam giác cân";
    } else if (canh3 ==Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh2, 2)) ||
        canh1 == Math.sqrt(Math.pow(canh2, 2) + Math.pow(canh3, 2)) ||
            canh2 == Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh3, 2))) {
        key = "tam giác vuông";
    }else{
        key = "một loại tam giác khác";
    }


    document.getElementById("txtResult").innerHTML = key;
}
document.getElementById("btn").onclick = tamGiac;
