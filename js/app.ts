
// Variables

let votebtn = document.querySelectorAll(".btn")
let votebtnleader = document.querySelectorAll(".leader");
let votebtndeputy = document.querySelectorAll(".deputy")
let L1btn, L2btn, L3btn, D1btn, D2btn, D3btn;

let vbtnlist = {
    L1btn : votebtnleader[0],
    L2btn : votebtnleader[1],
    L3btn : votebtnleader[2],
    D1btn : votebtndeputy[0],
    D2btn : votebtndeputy[1],
    D3btn : votebtndeputy[2],
}



// Functions
// if localstorage = empty
// set localStorage for candidate 
// stop checking if value is set 
// else 
// u hv already voted

if (localStorage.getItem("vote leader") == null || localStorage.getItem("vote deputy") == null) {
    votebtnleader.forEach(element => {
        element.addEventListener("click", function() {
            console.log(element.id)
            localStorage.setItem("vote leader", element.id);
        });
    })
    votebtndeputy.forEach(element => {
        element.addEventListener("click", function() {
            console.log(element.id)
            localStorage.setItem("vote deputy", element.id);
        });
    })
}
else{
    votebtn.forEach(element => {
        element.addEventListener("click", function() {
            alert("You have already voted")
            console.log("already voted")
        });
    })
}



// votebtn.forEach(element => {
//     element.addEventListener("click", function() {
//         console.log(element.id)
//     });
// });




// setInterval( () => {
//     votebtn.forEach(element => {
//         element.addEventListener("click", function() {
//             alert("You have already voted")
//         });
//     });
// },500);
