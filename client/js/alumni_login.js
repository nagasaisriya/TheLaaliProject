const auth=firebase.auth();

function signin() {
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("pwd").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      // Signed in
      //vasu@email.com pwd:123456
      //
      console.log("signed in!");
      user.getIdToken().then(function (idToken) {
        console.log(idToken);
        document.cookie = `token=${idToken}`;
        console.log(getCookie("token"));
        window.location.href = "http://127.0.0.1:5500/team-53/client/html/admin_dashboard.html";
        //fetch
      });
    })
    .catch(error => {
      console.log(error);
    });
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  return cookie[cookieName];
}
