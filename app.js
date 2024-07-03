m = 0;
var speed;

function start() {

   speed = setInterval(run, 10);

    function run() {
      if(m == 965){
        clearInterval(s);
        m = 0;
      }else{
        m += 5;
        var car = document.getElementById('img');
        car.style.marginLeft = m + 'px';
      }
    }
}

function stop() {

    clearInterval(speed)

}