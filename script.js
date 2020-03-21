//Pseudo code
// 1. create all the possible input arrays
//2. accept user choice of length
//3. choose strength level(easy,medium,hard)
//4.based on strength generate password
//  easy-just combination of upper and lower case alphabets
//  medium- combination of alphabets and numbers
// hard-  combination of everything.
function generatePassword() {
    /****
     * WRITE YOUR CODE HERE
     */
    var specialCharSet = "!\"#$%&'()*+,-./:;<=>?@[\]\"^_`{|}~";
    var numberSet = "0123456789";
    var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
    var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password,u,l,s,str;
    var result = [];


    var userCriteria = prompt("Hello, let's generate a unique password.Select one criteria from the following:\n 1. Easy \n 2.Medium \n 3. Hard");
    if(userCriteria == 1 || userCriteria == 2 || userCriteria == 3){
      var length = prompt("Enter length of the password:\n ");

      if(length < 8 || length > 128){
        alert("Sorry!Minimum Requirements not met.Password length atleast 8 characters!!");
      }
      else if(userCriteria == 1 &&  length <= 128){
          password = easy();
      }
      else if(userCriteria == 2 && length >8 && length <128){
          password = medium();

      }
      else if(userCriteria == 3 && length >8 && length <128){
          password = hard();

      }
      else alert("Enter again!");
    } else  
      alert("Sorry! You must choose between \n 1. Easy \n 2.Medium \n 3.Hard")
    
    
      function easy(){
        for(var i = 0;i<length ;i++){
          var u = String.fromCharCode(65 + (Math.floor(Math.random() * 26)));     //Upper case success
          var l = String.fromCharCode(97 + (Math.floor(Math.random() * 26)));     //lower case success 
          result[i] =u.concat(l);
        }
        
        password = result.toString();
        var r = password.replace(",","");
        return r.substring(0,length);
      }
  
    function medium(){
      for(var i = 0;i<length ;i++){
        var random = Math.floor(Math.random() * 10); 
        var u = String.fromCharCode(65 + (Math.floor(Math.random() * 26)));     //Upper case success
        var l = String.fromCharCode(97 + (Math.floor(Math.random() * 26)));     //lower case success 
        result[i] = random + u.concat(l);
      }
      password = result.toString();
      var r = password.replace(",","");
      return r.substring(0,length);
  
      }
  
    function hard(){
      for(var i = 0; i< length ; i++){
  
      var random = Math.floor(Math.random() * 10);                             //Success
      var u = String.fromCharCode(65 + (Math.floor(Math.random() * 26)));     //Upper case success
      var l = String.fromCharCode(97 + (Math.floor(Math.random() * 26)));     //lower case success 
      var s1 = String.fromCharCode(33 + (Math.floor(Math.random() * 26)));    //Special char success 
      var s2 = String.fromCharCode(91 + (Math.floor(Math.random() * 26)));
        result[i] = random +  u.concat(l).concat(s1).concat(s2);
       
      }
      password = result.toString();
      var r = password.replace(",","");
      return r.substring(0,length);
    }
    
  return password;
  
    }
  
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  
  