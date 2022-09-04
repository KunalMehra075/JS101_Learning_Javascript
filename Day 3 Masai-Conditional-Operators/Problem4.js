//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_user="abc@gmail.com";
let stored_pass="123456";

let input_user="abc@gmail.com";
let input_pass="123456";

if(stored_user == input_user){
  if(stored_pass == input_pass){
    console.log("Login Successful")
  }
  
}else{
  console.log("Wrong Credentials..Cannot Login")
}