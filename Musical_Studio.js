if (Meteor.isClient) {

  var context;
  var tempBuffer = null;
  var temp1, temp2;
  var array = [1, 2, 3, 4, 5, 6];
  Meteor.startup(function() {
    function randSort() {
      return (parseInt(Math.random() * 10) % 2);
    }

    array.sort(randSort).toString();
    for (var k = 0; k < array.length; k++) {
      if (k === 0) {
        document.getElementById(('div1Center')).innerHTML = array[k];
      }
      document.getElementById(('div' + (k + 1) + 'Center')).innerHTML = array[k];
    }

    var i = 1;
    $(("#div" + i)).fadeOut(800, function() {
      document.getElementById(('div' + i + 'Center')).innerHTML = array[i];
      $(("#div" + i)).fadeIn(800);
    });
    $(("#div" + (i + 1))).fadeOut(800, function() {
      document.getElementById(('div' + (i + 1) + 'Center')).innerHTML = array[i - 1];
      $(("#div" + (i + 1))).fadeIn(800);
    });


  });




  Deps.autorun(function() {
    function sleep(miliseconds) {
      var currentTime = new Date().getTime();

      while (currentTime + miliseconds >= new Date().getTime()) {}
    }
    soundManager.onready(function() {
        soundManager.createSound({
          id: 'AA',
          url: 'http://www.vibrationdata.com/piano_octave_A_A.mp3'
        });
        soundManager.createSound({
          id: 'AE12',
          url: 'http://www.vibrationdata.com/piano_twelfth_A_E.mp3'
        });
        soundManager.createSound({
          id: 'AE5',
          url: 'http://www.vibrationdata.com/piano_fifth_A_E.mp3'
        });
        soundManager.createSound({
          id: 'AD',
          url: 'http://www.vibrationdata.com/piano_fourth_A_D.mp3'
        });
        soundManager.createSound({
          id: 'AC',
          url: 'http://www.vibrationdata.com/piano_Major_Third_A_C_sharp.mp3'
        });
        soundManager.createSound({
          id: 'AF',
          url: 'http://www.vibrationdata.com/piano_Major_Sixth_A_F_sharp.mp3'
        });

        function playAA() {
          soundManager.play('AA');
        };

        function playAE12() {
          soundManager.play('AE12');
        };

        function playAE5() {
          soundManager.play('AE5');
        };

        function playAD() {
          soundManager.play('AD');
        };

        function playAC() {
          soundManager.play('AC');
        };

        function playAF() {
          soundManager.play('AF');
        };

        var sounds = [
          new Audio('http://www.vibrationdata.com/piano_octave_A_A.mp3'),
          new Audio('http://www.vibrationdata.com/piano_twelfth_A_E.mp3'),
          new Audio('http://www.vibrationdata.com/piano_fifth_A_E.mp3'),
          new Audio('http://www.vibrationdata.com/piano_fourth_A_D.mp3'),
          new Audio('http://www.vibrationdata.com/piano_Major_Third_A_C_sharp.mp3'),
          new Audio('http://www.vibrationdata.com/piano_Major_Sixth_A_F_sharp.mp3')
        ];


        sounds[0].addEventListener("play", function() {
          sounds[1].pause();
          sounds[1].currentTime = 0;
          sounds[2].pause();
          sounds[2].currentTime = 0;
          sounds[3].pause();
          sounds[3].currentTime = 0;
          sounds[4].pause();
          sounds[4].currentTime = 0;
          sounds[5].pause();
          sounds[5].currentTime = 0;
          sounds[0].play();
        });
        sounds[1].addEventListener("play", function() {
          sounds[0].pause();
          sounds[0].currentTime = 0;
          sounds[1].pause();
          sounds[1].currentTime = 0;
          sounds[2].pause();
          sounds[2].currentTime = 0;
          sounds[3].pause();
          sounds[3].currentTime = 0;
          sounds[4].pause();
          sounds[4].currentTime = 0;
          sounds[1].play();
        });
        sounds[2].addEventListener("play", function() {
          sounds[0].pause();
          sounds[0].currentTime = 0;
          sounds[1].pause();
          sounds[1].currentTime = 0;
          sounds[3].pause();
          sounds[3].currentTime = 0;
          sounds[4].pause();
          sounds[4].currentTime = 0;
          sounds[5].pause();
          sounds[5].currentTime = 0;
          sounds[2].play();
        });
        sounds[3].addEventListener("play", function() {
          sounds[0].pause();
          sounds[0].currentTime = 0;
          sounds[1].pause();
          sounds[1].currentTime = 0;
          sounds[2].pause();
          sounds[2].currentTime = 0;
          sounds[4].pause();
          sounds[4].currentTime = 0;
          sounds[5].pause();
          sounds[5].currentTime = 0;
          sounds[3].play();
        });
        sounds[4].addEventListener("play", function() {
          sounds[0].pause();
          sounds[0].currentTime = 0;
          sounds[1].pause();
          sounds[1].currentTime = 0;
          sounds[2].pause();
          sounds[2].currentTime = 0;
          sounds[3].pause();
          sounds[3].currentTime = 0;
          sounds[5].pause();
          sounds[5].currentTime = 0;
          sounds[4].play();
        });
        sounds[5].addEventListener("play", function() {
          sounds[0].pause();
          sounds[0].currentTime = 0;
          sounds[1].pause();
          sounds[1].currentTime = 0;
          sounds[2].pause();
          sounds[2].currentTime = 0;
          sounds[3].pause();
          sounds[3].currentTime = 0;
          sounds[4].pause();
          sounds[4].currentTime = 0;
          sounds[5].play();
        });





        function playTemp() {
          sounds[temp1].play();

        }

        function playTemp2() {
          sounds[temp2].play();

        }


        Array.prototype.bubblesort = function() {
          var done = false;
          while (!done) {
            done = true;
            for (var i = 1; i < this.length; i++) {
              if (this[i - 1] > this[i]) {
                done = false;
                temp1 = this[i - 1];
                setTimeout(playTemp, 1000);
                temp2 = this[i];
                setTimeout(playTemp2, 2000);
                [this[i - 1], this[i]] = [this[i], this[i - 1]];
                setTimeout(playTemp, 3000);
                setTimeout(playTemp2, 4000);
                console.log("switched");
              }
            }
          }
          return this;
        }

        array.bubblesort();
        for (var o = 0; o < 6; o++) {
          console.log(array[o]);
        }

      }









    )
  })

}
if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
