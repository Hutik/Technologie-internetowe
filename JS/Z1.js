var string = 'Tworzenie stron internetowych';

var array = string.split(' ');

console.log(array);

var cb = document.getElementById('z1');
cb.innerHTML='';

for(var i=0; i<array.length;i++){
    switch(i){
        case 0:
            cb.innerHTML=cb.innerHTML+'<span style="text-decoration: underline; margin-right: 10px;">'+array[i].toUpperCase()+'</span>';
            break;
        case 1:
            cb.innerHTML=cb.innerHTML+'<span style="border-bottom-style: double; margin-right: 10px;">'+array[i].toUpperCase()+'</span>';
            break;
        case 2:
            cb.innerHTML=cb.innerHTML+'<span style="text-decoration: underline; color: red; display: block;">'+array[i].toUpperCase()+'</span>';
            break;
    }
    console.log('Działa');
}