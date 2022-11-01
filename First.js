let pcount=0;

let countEl=document.getElementById("countEl");
let saveEl=document.getElementById("save-el")

function increment(){
    pcount=pcount+1;
    countEl.innerText=pcount;
}

function save(){
    let str=pcount+"- ";
    saveEl.innerText+=str;
    countEl.innerText=0;
    pcount=0;
}