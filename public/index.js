function allert(i){
    const Http = new XMLHttpRequest();
    const url='http://localhost:3000/todo/delete/'+i;
    Http.open("DELETE", url);
    Http.send();
    location.reload();
}

function done(i){
    const Http = new XMLHttpRequest();
    const url='http://localhost:3000/todo/done/'+i;
    Http.open("PUT", url);
    Http.send();
    location.reload();
}
