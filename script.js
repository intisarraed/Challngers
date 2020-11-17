
function chanlleng1(arr) {
    let array=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
            array.push(arr[i]);
        }
    }
    document.getElementById("res1").innerHTML = array;
}

function chanlleng2() {
    arr1 = [1, 2, 3];
    arr2 = [4, 5, 6];
    var merarr = arr1.concat(arr2)
    document.getElementById("res1").innerHTML = merarr;
}
 function chanlleng3(){
    let fullName = {
        fname:"intisar",
        lname:"qafesha"
    }
    if(fullName.hasOwnProperty('fname')){
        document.getElementById('res3').innerHTML="it contains the key";
    }
 }
function chanlleng4(value ){
    if(value instanceof Array){
        document.getElementById("res4").innerHTML="it is array";
    }
        else{
            document.getElementById("res4").innerHTML="it isn't array";
        }
    }

function chanlleng5(str ) {
function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const caps = str.split(' ').map(capitalize).join(' ');
    document.getElementById("res3").innerHTML = caps;
    
}

function chanlleng6() {
    const arr = [12, 345, 4, 546, 122, 84, 98, 64];
    let swap;
    let size = arr.length - 1;
    let x = arr;
    do {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swap = true;
            }
        }
        size--;
    } while (swap);
    document.getElementById("res6").innerHTML = x;
}
