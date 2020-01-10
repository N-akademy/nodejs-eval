const form = document.getElementById('oneMore')
if(form){
    form.addEventListener('submit',function(){
        
        const lastName = document.querySelector("#lastname").value;
        console.log(lastName)
        const firstName = document.getElementById("firstname").value;
        const avatar = document.getElementById("avatar").value;
        
            fetch('',{
                method:'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    lastName:lastName,
                    firstName:firstName,
                    avatar:avatar,
                })    
            })
    })
}


const update = document.getElementById('editClient')
if(update){
    update.addEventListener('submit',function(event){
        event.preventDefault();
        const client = document.querySelector("#change").value;
        console.log(client);
        fetch('',{
            method:'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                message:client
                
                }) 
            
        }) .then(function(response){
                console.log(response);
                
                if(response.status===200){
                    location.href="/"
                }
                console.log(response)
            })  
    })
}    



const suppress = function(id) {
    fetch('/clients/' + id, {
        method: 'DELETE'
    })
    .then(function(){window.location.reload()});
};