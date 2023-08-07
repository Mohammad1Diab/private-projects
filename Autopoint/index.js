function tooltip1v() {
    var tt1 = document.getElementById("tooltip1")
    tt1.style.visibility="visible";
  }
  function tooltip1h() {
    var tt1 = document.getElementById("tooltip1")
    tt1.style.visibility="hidden";
  }
  function tooltip2v() {
    var tt2 = document.getElementById("tooltip2")
    tt2.style.visibility="visible";
  }
  function tooltip2h() {
    var tt2 = document.getElementById("tooltip2")
    tt2.style.visibility="hidden";
  }


  function    Changing1(){
    document.getElementById("heading1").innerHTML = "Werkstatt";
    document.getElementById("text3").innerHTML = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    var svg2 = document.getElementById("svg2");
    svg2.style.cursor="pointer";
    svg2.src="Unbenannt22jpg.jpg";
      var svg1 = document.getElementById("svg1");
     svg1.src="Unbenannt1.png";
     svg1.style.cursor="default";
     var tt2 = document.getElementById("tooltip2");
     tt2.style.position="relative";
     tt2.style.top= "0";
     tt2.style.right= "0";
     var tt1 = document.getElementById("tooltip1");
     tt1.style.position="relative";
     tt1.style.top= "0";
     tt1.style.right= "0";
  
  
  }
    function Changing2() {
      document.getElementById("heading1").innerHTML = "Marktplatz";
      document.getElementById("text3").innerHTML = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
      var svg1 = document.getElementById("svg1");
      svg1.style.cursor="pointer";
          svg1.src="Unbenannt2.jpg";
        var svg2 = document.getElementById("svg2");
      svg2.src="Unbenannt11.jpg";
        svg2.style.cursor="default";
        var tt2 = document.getElementById("tooltip2");
        tt2.style.position="relative";
        tt2.style.top= "10px";
        tt2.style.right= "20px";
        var tt1 = document.getElementById("tooltip1");
        tt1.style.position="relative";
        tt1.style.top= "10px";
        tt1.style.right= "20px";
  }

  function func3(){
    window.location.href="https://www.google.com/maps/place/Autopoint+Gundelfingen/@48.5446124,10.3691508,17z/data=!3m1!4b1!4m5!3m4!1s0x479948688bd8331d:0xc7ddef9a5e226713!8m2!3d48.5446077!4d10.3669311";
  }

  function func4(){
    window.location.href="kontakt.html";
  }