var db = firebase.firestore()

const hi = () =>{
    const id = document.getElementById('id').value;
    const mess = document.getElementById('mess').value;
    db.collection('messages').doc(String(Date.now())).set({
        id,
        mess
    })
        

    db.collection('count').doc('count').set({
        count:ms_count
    })  
}

let count = 0
if (count == 0){
    console.log(count)
    db.collection("messages").get().then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            const id = document.createElement('div')
            const mess = document.createElement('div')
         //   const id = document.getElementById('id')
           // const mess = document.getElementById('mess')
            id.innerText = "ID: "+ doc.data().id 
            mess.innerText = "Message: "+doc.data().mess
            const wrapper = document.createElement('div')
            wrapper.append(id)
            wrapper.append(mess)
            const main = document.getElementById('ms_div')
            main.append(wrapper)
            main.append(document.createElement('br'))
        });
        
    });
    count++
}

db.collection('messages')
.onSnapshot((querySnapshot) => {
    var messages = [];
    count++
    querySnapshot.forEach((doc) => {
        messages.push({mess:doc.data().mess,id:doc.data().id});
    });
    console.log(messages[messages.length-1])
    if(count!=2){
        const id = document.createElement('div')
            const mess = document.createElement('div')
            id.innerText = "ID: " +messages[messages.length-1].id
            mess.innerText = "Message: " +messages[messages.length-1].mess
            const wrapper = document.createElement('div')
            wrapper.className="container"
            wrapper.append(id)
            wrapper.append(mess)
            const main = document.getElementById('ms_div')
            main.append(wrapper)
            main.append(document.createElement('br'))
    }
    
});
