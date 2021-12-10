

                          // chapter DOM

//   Question = 1

// var itemsArray = [
//     { name: "juice", price: 0, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 },
//     {
//         total: function () {
//             var mul = (itemsArray[0].price * itemsArray[0].quantity) + (itemsArray[1].price * itemsArray[1].quantity)
//              + (itemsArray[2].price * itemsArray[2].quantity) + (itemsArray[3].price * itemsArray[3].quantity)
//         return mul
//             }
//     }
// ];
// console.log(itemsArray[4].total())



    //    Question = 2

// var details = {
// name : "idrees",
// age : 21,
// country : "pakistan",
// email : "midreeskahn7276@gmail.com",
// password : "abcded",
// gender : "male",

// }
                      

// var check = "email" in details
// console.log(check)
// var check = "country" in details         
// console.log(check)




// var check = "firstName" in details
// console.log(check)
// var check = "lastName" in details
// console.log(check)



    //   Question 3 



//     function Detail (Name , clas , age , id ){
//         this.Name= Name;
//         this.clas= clas ;
//         this.age= age;
//         this.id= id;

// }
// var a = new Detail("idrees" , "web and app" , 21, 1233 )
// var b = new Detail("abdullah" , "web and app" , 29, 1232 )
// var c = new Detail("rafi" , "web and app" , 20, 1234 )
// console.log(a)
// console.log(b)
// console.log(c)



   // question = 4

//    var tabl = document.getElementById("table");

// var length = +prompt("")
// var name ; 
// var gender ;
// var adddres ;
// var perofession ;
// var tr = ""
// for(var i = 0 ; i < length ; i++ ){
    
//      name2  = prompt("name:" + (i+ 1));
//      gender  = prompt("genedr:" + (i+ 1));
//      adddres = prompt("adress:" + (i+ 1));
//     perofession = prompt("profession:" + (i+ 1));
//     var detail = {
      
//     name1: name2,
//       gender: gender,
//       address: adddres,
//          profession:  perofession,
//     };

// var tr = `<tr>
// <td>1</td>
// <td>${detail.name1}</td>
// <td>${detail.gender}</td>
// <td>${detail.address}</td>
// <td>${detail.profession}</td>
// </tr>`;
// tabl.innerHTML +=tr
// }