const btn = document.querySelector('#btn');
btn.addEventListener('mouseover',function () {
    btn.style.backgroundColor = "red";
    btn.style.height = "20vh";
    btn.style.width = "30vw";
});
btn.addEventListener('mouseout', function () {
    btn.style.backgroundColor = "";
    btn.style.height = "";
    btn.style.width = "";

});