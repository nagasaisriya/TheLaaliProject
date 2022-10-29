var x = getCookie("token");
console.log(x);

fetch('https://cfg-53.herokuapp.com/resources', {
    method: 'GET',
    // mode: 'no-cors',
    headers: new Headers({
        'Accept': 'application/json',
        // 'Content-type': 'application/json',
        'Authorization': `Bearer ${x}`,
        // 'Access-Control-Allow-Origin': '*'  
    }), 
})
.then((res) => res.json())
.then((data) => {
    console.log(data);
    displayArea = document.getElementById('displayArea');

    let output = '';
    data.forEach(function(resource){
        output += `
            <p>
                <div class="col-sm-4 my-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><b>${resource.title}</b></h5>
                            <hr />
                            <p class="card-text">${resource.description}</p>
                            <hr />
                            <a href="${resource.url}" class="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </p>
            `;
        });
        document.getElementById('displayArea').innerHTML = output;
})
.catch((err) => console.log(err));

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }