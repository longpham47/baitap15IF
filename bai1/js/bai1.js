/**
 *! bài 1 xắp xếp 3 số thứ tự tăng dần


 khối 1 input
 a
 b
 c 

 khối 2 
  B1: Tạo biến so1,  so2,  so3
  B2: Gan giá trị cho biến
  B3: Lập công thức tính toán
  => so sanh các cặp số tưng cặp vs nhau 
        (so1 > so2 ) && (so1 > so3) => true => (so1 > so2 > so3)
        tương tự cắc cặp sô trường hơpk còn lại 

  khối 3
  sapXep
 */

function sapXepTangDan(){
 var a = Number(document.getElementById("somot").value);
 var b = Number(document.getElementById("sohai").value);
 var c = Number(document.getElementById("soba").value);
 console.log(a,b,c);
 var sapXep;
 
 console.log( typeof(sapXep));
 if( a>b && a>c){
   sapxep = c < b < a
  console.log(sapXep = c +  "<" +  b + "<" +a) 
 }else if(a > b && c > b){
   sapXep = b < c < a;
   console.log(sapXep = b +  "<" +  c + "<" +a)
 }else if(a > b && c> a){
    sapXep = b < a < c
   console.log(sapXep = b +  "<" +  a + "<" + c ) 
 }else if (b>a && b>c){
    sapXep = c<a<b
console.log( sapXep = c +  "<" +  a + "<" + b  )
 }else if(b > c && c>a){
    sapXep = a<c<b
   console.log(sapXep = a +  "<" +  c + "<" + b  )
 }else{
   sapXep = a<b<c
   console.log( sapXep = a +  "<" +  b + "<" + c )
    
 }

 document.getElementById("txtResult").innerHTML = sapXep;
}
document.getElementById("btn").onclick = sapXepTangDan;

// function thututangdan() {
//    var a = Number(document.getElementById("somot").value);
//    var b = Number(document.getElementById("sohai").value);
//    var c = Number(document.getElementById("soba").value);
//    var sapxep;
//    if (a > b) {
//        if (b > c) {
//            sapxep = c < b < a;
//            console.log(sapxep = c +  "<" +  b + "<" +a);
//        } else {
//            if (a > c) {
//                sapxep = b < c < a;
//                console.log(sapxep = b +  "<" +  c + "<" +a);
//            } else {
//                sapxep = b < a < c;
//                console.log(sapxep = b +  "<" +  a + "<" +c);
//            }
           
//        }
       
//    } else {
//        if (a > c) {
//            sapxep = c < a < b;
//            console.log(sapxep = c +  "<" +  a + "<" +b);
//        }
//        else {
//            if (b > c) {
//                sapxep = a < c < b;
//                console.log(sapxep = a +  "<" +  c + "<" +b);
               
//            } else {
//                sapxep = a < b < c;
//                console.log(sapxep = a +  "<" +  b + "<" +c);
//            }
//        }
   
//    }
//    document.getElementById("txtResult").innerHTML = sapxep;

// }
// document.getElementById("btn").onclick = thututangdan;