// // setTimeout(()=>{
// //     console.log("set time out method");
// // },4000)

// function MSD() {
//     return "5 Sala Cup Namde"
// }

//  function VK() {
//      return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Ee Sala Cup Namde")
//         },3000);
//     })
// }

// function ABD() {
//     return "Mr.360"
// }

// async function AAP() {
//     console.log(MSD());
//     console.log(await VK());
//     console.log(ABD());
// }

// AAP()
//=========================================================================

//https://jsonplaceholder.typicode.com/users
//async function ---> This is a Function and below is normal 
let fetchData = async() => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    //console.log(response);
    let data = await response.json()
    //console.log(data);
    data.map((x)=>{
        console.log(x.name);
    })
}
fetchData()