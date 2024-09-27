// Check if passwords match
function checkPasswordsMatch () {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        console.log("Passwords don't match");
        return false;
    }
    if (password === confirmPassword) {
        console.log("Passwords match!")
        return true;
    }
}


/* 
-add event listener to submit button
-if the password and confirm-password field, OR one or the other, is empty, return
-if the password and confirm-password field is NOT EMPTY, run the checkPassWordMatch function
*/


// const password = document.getElementById("password").value;
// const confirmPassword = document.getElementById("confirm-password").value;

// if (password != "" & confirmPassword != "") {
//     if (password === confirmPassword) {
//         console.log("Passwords match")
//     }
//     if (password !== confirmPassword) {
//         console.log("Passwords don't match")
//     }
// }