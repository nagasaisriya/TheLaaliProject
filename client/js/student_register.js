function addPost(e){
    e.preventDefault();

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let age=document.getElementById('age').value;
    let skills=document.getElementById('skills').value;
    let gender=document.getElementById('gender').value;
    let phone=document.getElementById('phone').value;
    let address=document.getElementById('address').value;
    //let pwd=document.getElementById('pwd').value;

    fetch('https://cfg-53.herokuapp.com/student',{
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({name:name,email:email,age:age,skills:skills,gender:gender,phone:phone,address:address})
    }).then((res)=>res.json())
    .then((data)=> console.log(data))


}

function add(type) {
    
    //Create an input type dynamically.
    var element = document.createElement("input");

    //Assign different attributes to the element.
    element.setAttribute("type", type);
    element.setAttribute("name", type);
    if(type=="Text") {
        element.setAttribute("placeholder", "skill")
        element.classList.add("full");
        var foo = document.getElementById("fooBar");

        //Append the element in page (in span).
        foo.appendChild(element);
    }
    else {
        element.setAttribute("placeholder", "Resource Id")
        element.classList.add("full2");
        var foo = document.getElementById("fooBar2");

        //Append the element in page (in span).
        foo.appendChild(element);
    }

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

function register(){
    signup();
}


function getSkills() {
    const full = document.getElementsByClassName('full');
    const arr = [...full].map(input => input.value);
    console.log(arr);
}
