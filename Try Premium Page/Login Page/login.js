function check(){

    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    var d = "music player"
    var e = "12345"

    if(a == d){
        if(b == e){
            window.alert("You're Successfully Loged in")
        }
    } else{
       window.alert("worng input")

   }
}