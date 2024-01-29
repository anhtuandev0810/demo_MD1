let danhmuc = [
    {
        id : "1",
        name : "Sony Xperia XZ Premium",
        brand : "Sony",
        price : "4428",
        color : "White",
        category : "Phone"
    },
    {
        id : "2",
        name : "OPPO F3 Plus",
        brand : "OPPO",
        price : "5482",
        color : "Black",
        category : "Phone"
    },
    {
        id : "3",
        name : "IPhone 13 Pro max",
        brand : "Aplle",
        price : "21490",
        color : "Gray",
        category : "Phone"

    },
    {
        id : "4",
        name : "Samsung Galaxy S8",
        brand : "Samsung",
        price : "8490",
        color : "Blue",
        category : "Phone1"

    }, 
]

//1.1
// for (let i=0 ; i<=danhmuc.length - 1; i++){
//     console.log(
// `Name: ${danhmuc[i].name}
// Price: ${danhmuc[i].price}`
//     );
// }

//1.2
// let a = +prompt("enter product position");
// let flag = false
// for(let i=0 ; i<=danhmuc.length - 1; i++){
//     if(a == danhmuc[i].id ){
//         console.log(danhmuc[i]);
//         flag = true
//     }
// }
// if(flag == false){
//     alert("nhập sai")
// }

//1.3

// let printDanhmucByCate = () => {
//     let inputCate = prompt("Nhập danh mục : ");
//     let flag = false;

//     for( let i = 0; i <= danhmuc.length - 1; i++) {
//         if (inputCate === danhmuc[i].category) {
//             flag = true;
//             console.log(`
//             Name: ${danhmuc[i].name}\n
//             Price: ${danhmuc[i].price}\n
//             ----------------------------
//             `);
//         }
//     }
//     if (flag == false) {
//         alert("Nhập danh mục không hợp lệ");
//     }
// }

// printDanhmucByCate();

//1.4

// for (let i = 0; i < danhmuc.length; i++) {
//    let input = prompt("mời bạn nhập")
//    danhmuc[i].providers = input
   
    
// }
// console.log(danhmuc[i]);

//1.5

// let n  = prompt("chon cac nha cung cap");
// for(let i=0;i<danhmuc.length;i++){
//     if(n=== danhmuc[i].providers){
//         console.log(danhmuc[i]);
//     }
// }
//2.1
let job = [
    {
        name: "HTML",
        complete: "false",
    },
    {
        name: "CSS",
        complete: "false",
    },
    {
        name: "JavaScript",
        complete: "false",
    },
    {
        name: "Node Package Manager",
        complete: "false",
    },
    {
        name: "Git",
        complete: "false",
    },
    
]
console.log(job);

//2.2

let inputUser;
while(inputUser !== "exit"){
    inputUser = prompt("Nhap C/R/U/D/E");
    switch (inputUser) {

        case "C":
            let inputCase = prompt("Nhap ten:");
            let inputValue = prompt("Nhap value");
            job[inputCase] = inputValue;
            console.log(job);
            break;
    
        default:
            break;
    }
}