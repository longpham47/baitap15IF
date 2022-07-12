/*Khối 1: Dữ liệu đang có sẵn (Input)
 * tên đối tượng 
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến 
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Nếu value = 'B' thì kết quả là 'Xin chào Bố!'
 *     - Nếu value = 'M' thì kết quả là 'Xin chào Mẹ!'
 *     - Tương tự cho các trường hợp còn lại
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * document.getElementById('chaoHoi').innerHTML
 */

function xinChao( ) {
   var lenh = document.getElementById("click").value;
   console.log(lenh);
  
   switch (lenh) {
      case "B":
         lenh = "xin chào bố";
        
         break;
      case "M":
         lenh = "xin chào mẹ";
         break;
      case "A":
         lenh = "xin chào anh trai";
         break;
      case "E":
         lenh = "xin chào em gái";
         break;
      default:
         alert("Hãy nhập lại đi!");
         break;
   }
   document.getElementById("txtResult").innerHTML= lenh;
}
document.getElementById("btn").onclick = xinChao

