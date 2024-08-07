function image(){
    let div = document.createElement('div');
    div.setAttribute('class','picture')
    document.body.appendChild(div);
    div.style.width = '46px'
    div.style.backgroundColor = 'white'
    let image = document.createElement('img');
    div.appendChild(image)
    image.src = 'images/sidebar.png'
    image.style.width = '100%'
    image.style.backgroundColor = 'white'
    
    div.addEventListener('click', function(){
        let ul1 = document.querySelector('.ul1');
        let ul2 = document.querySelector('.ul2')
       
        if(ul1.style.display === "none"){
            ul1.style.display = 'flex'
            ul2.style.display = 'flex';
        }
        else{
            ul1.style.display = "none"
            ul2.style.display = "none";
        }
    })




}
image()