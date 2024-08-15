burger=document.querySelector('.hamburg');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
search=document.querySelector('.searchbar');

burger.addEventListener('click',()=>{
    navlist.classList.toggle('visible')
    search.classList.toggle('visible')
    navbar.classList.toggle('resp-navbar')
    // navbar.classList.toggle('visible')

})
submit=document.querySelector('.conbtn')

function submitdata(){
    const Name=document.querySelector('#name').value
    const phone=document.querySelector('#phone').value
    const email=document.querySelector('#email').value
    const textarea=document.querySelector('#textarea').value
    if(Name=== "" || phone=== "" || email==="" || textarea===""){
        alert("All fields must be filled!")
    }
    else{
        alert("Your response has been submitted.")

    }
}

submit.addEventListener('click',submitdata)

