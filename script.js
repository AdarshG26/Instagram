var cont =  document.querySelector('.container')

var like = document.querySelector('i')


cont.addEventListener("dblclick", function(){
    like.style.transform = "translate(-50%, -50%) scale(1)"
    setTimeout(function(){
        like.style.transform = "translate(-50%, -50%) scale(0)"
    },750)
})

