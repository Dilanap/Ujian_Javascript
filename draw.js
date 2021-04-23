
class Draw{
 Kotak(x) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            process.stdout.write("*")
        } console.log("")
    }
   console.log("\n")
}
Segitiga(a){
    for (let x=0; x<a; x++) {
        for(let y=0; y<=x; y++) {
            process.stdout.write("*")
        } console.log("")
    }
   console.log("\n")
}
SegitigaTerbalik(a){
    for (let i=0; i<=a; i++){
        for(let j=a-1; j>=i; j--){
            process.stdout.write("*")
        } console.log("")
    }
   console.log("\n")
}
Selangseling(a){
for (let i = 0; i <a; i++){
    for (let j = 0; j< a; j++) {
      if ((i%2==0 && j%2==1) || (i%2==1 && j%2==0)){
        process.stdout.write("*")
      }else{
        process.stdout.write("!")
      }
    }console.log(" ")
  }
  console.log("\n")
}


Kotakpola(a, b) {
  let jumlah = 0;
  let hasil = "";
  for (let x = 0; x < a; x++) {
    jumlah++;
    let countVar = 0;
    for (let y = 0; y < b; y++) {
      countVar++;
      hasil += "*";
      if (jumlah % 2 == y) {
        hasil += "!";
      }
    }
    hasil += "\n";
  }

  console.log(hasil);
}
}

    
let test=new Draw();
test.Kotak(6);

let test1=new Draw();
test1.Segitiga(6);

let test2=new Draw();
test2.SegitigaTerbalik(6);

let test3=new Draw();
test3.Selangseling(5);

let test4=new Draw();
test4.Kotakpola(6,5);