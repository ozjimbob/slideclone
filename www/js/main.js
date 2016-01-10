

var paper = Raphael(10, 50, 800, 600);

var sliders={};
var buttons={};

for(var i = 0; i < 4; i++){
  paper.rect(50,i*75+70,650,20).attr({fill:"#000"});
}

for (var i = 0; i<4; i++) {
  sliders[i]=paper.rect(200,(i*75)+50,320,60).attr({fill:"#77F"}).data("slid",i);
  for(var j = 0; j < 4; j++){
    buttons[j*4+i]=(paper.rect((j*80)+220,(i*75)+70,20,20).attr({fill:"#00F"}).data("flslid",i).data("flid",j));
  }
}

for (var i in sliders) {
          (function (st) {
              st[0].style.fill = "#f00";
          })(sliders[i]);
      }

for (var i in buttons) {
          (function (st) {
            st[0].style.fill = "#0f0";
      })(buttons[i]);
}
