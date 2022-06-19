function changeColor(){
    var div = document.getElementById('z3');

    if(div.style['background']==''||div.style['background']=='white'){
        div.style['background']='green';
        div.style['color']='white';
    }else{
        div.style['background']='white';
        div.style['color']='black';
    }
}