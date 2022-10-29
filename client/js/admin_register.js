function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }

function admin(){
    // e.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    //let pwd=document.getElementById('pwd').value;

    var x = getCookie("token");
    console.log(x);

    fetch('https://cfg-53.herokuapp.com/admin',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json',
            'Authorization': `Bearer ${x}`
        },
        body:JSON.stringify({name:name,email:email})
    }).then((res)=>res.json())
    .then((data)=> console.log(data))
}

  const auth = firebase.auth();
  function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("signed up!");
        user.getIdToken().then(function (idToken) {
          console.log(idToken);
          document.cookie = `token=${idToken}`;
          admin();
          //fetch header id token
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  function register() {
      signup();
  }

  
  
  ​
