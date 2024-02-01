    var user = {
        password: "18032002"
    };
    var json = JSON.stringify(user);
    localStorage.setItem("tonthuyngan", json);

    function checkLogIn(){
        var status = localStorage.getItem("status")
        var data = JSON.parse(status);

            if(!window.location.href.includes('login.html') && (data == null || data.status == 0)){
                console.log("đang di")
                window.location.href = "login.html"
                localStorage.setItem("status",0)
            } 
        }
    checkLogIn();


  function login(e){
    event.preventDefault();
    var password = document.getElementById("password").value;
    var username = localStorage.getItem("tonthuyngan");
    var data = JSON.parse(username);
    if(password == data.password){
      window.location.href = 'index.html';
      localStorage.setItem("status",1)
    } else {
        alert("Vui lòng nhập lại mật khẩu")
    }
  }

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  if(!window.location.href.includes('login.html')){
    setInterval(createHeart, 300);
  }
  