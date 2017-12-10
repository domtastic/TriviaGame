let qNumber = 1;
let correct, wrong;

let questions = [
  {
    question: "Who was the first person to climb Mount Everest?",
    option1: "George Mallory",
    option2: "Reinhold Messner",
    option3: "Sir Edmund Hillary",
    option4: "John Muir",
    answer: "Sir Edmund Hillary"
  },
  {
    question:
      "Statistically, what is the most dangerous mountain in the world?",
    option1: "Everest",
    option2: "Anapurna",
    option3: "K2",
    option4: "Matterhorn",
    answer: "Anapurna"
  },
  {
    question:
      "Who was the first person to free-solo climb (without rope) El Capitan in Yosemite National Park? ",
    option1: "Dean Potter",
    option2: "Chris Sharma",
    option3: "Tommy Caldwell",
    option4: "Alex Honnold",
    answer: "Alex Honnold"
  },
  {
    question:
      "Statistically, what is the most dangerous mountain in the world?",
    option1: "Conrad Anker",
    option2: "Will Gadd",
    option3: "Alex Lowe",
    option4: "Ines Papert",
    answer: "Will Gadd"
  },
  {
    question: "What is the one rule of ice climbing?",
    option1: "Always have fun",
    option2: "Do not scream",
    option3: "Do not fall",
    option4: "Do not look down",
    answer: "Do not fall"
  },
  {
    question: "What type of knot, is NOT used to join two ropes together?",
    option1: "Euro Death knot",
    option2: "Double Fishermans",
    option3: "Rethreaded Figure Eight",
    option4: "Bowline",
    answer: "Bowline"
  },
  {
    question:
      "In what year did Grivel develop the first crampons with front points to help climb vertical ice?",
    option1: "1909",
    option2: "1912",
    option3: "1929",
    option4: "1934",
    answer: "1929"
  },
  {
    question: "What is the main cause of death on Mount Everest?",
    option1: "Avalanche",
    option2: "Altitude Sickness",
    option3: "Fall/Trip/Slip",
    option4: "Icefall Collapse",
    answer: "Avalanche"
  },
  {
    question: "What is an example of passive protection?",
    option1: "Nut",
    option2: "Camelot",
    option3: "ATC",
    option4: "Carabiner",
    answer: "Nut"
  },
  {
    question:
      "How much oxygen does a person intake in the death zone (8000 meters elevation), compared to sea level?",
    option1: "30%",
    option2: "40%",
    option3: "50%",
    option4: "60%",
    answer: "30%"
  }
];

//TIMER
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
//prevents the clock from being sped up unnecessarily
var clockRunning = false;
// Our stopwatch object
var timer = {
  time: 90,
  reset: function() {
    timer.time = 90;
  },
  start: function() {
    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(timer.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  count: function() {
    // DONE: increment time by 1, remember we cant use "this" here.
    timer.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = timer.timeConverter(timer.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
    if (timer.time == 0) {
      timer.stop();
      timer.reset();
      checkAnswers();
    }
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

// When the clicking "Quiz Me!":
$("#start-button").on("click", event => {
  //   hide <p> and start button
  $("p").css("visibility", "hidden");
  $("#start-button").css("visibility", "hidden");
  $("#submit").css("visibility", "visible");
  $("#display").css("visibility", "visible");
  // start timer
  timer.start();
  // for each question
  questions.forEach(element => {
    // add questions card to content div
    $(".content").append(
      `<div class="row">
        <div class="card">
            <div class="card-header">
            ${qNumber}. ${element.question}
            </div>
            <form>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <input type="radio" name="q${qNumber}" value="${
        element.option1
      }"> ${element.option1}
                    </li>
                    <li class="list-group-item">
                        <input type="radio" name="q${qNumber}" value="${
        element.option2
      }"> ${element.option2}
                    </li>
                    <li class="list-group-item">
                        <input type="radio" name="q${qNumber}" value="${
        element.option3
      }"> ${element.option3}
                    </li>
                    <li class="list-group-item">
                        <input type="radio" name="q${qNumber}" value="${
        element.option4
      }"> ${element.option4}
                    </li>
                </ul>
            </form>
        </div>
    </div>
    <br/>
    `
    );
    // increase questions number by 1
    qNumber++;
  });
});

// submit click function
// stop timer
$("#submit").on("click", event => {
  checkAnswers();
  timer.stop();
  timer.reset();
  $("#display").css("visibility", "hidden");
});
// function check answer
function checkAnswers() {
  // add up radio buttons where the value === answer
  // questions not answered: 10 - sum of checked
  // questions missed: radio button checked - correct
  console.log("check answers");
  // empty questions
  $(".content").empty();
  // hide submit button
  $("#submit").css("visibility", "hidden");
  $("#display").css("visibility", "hidden");
  $("#start-button").css("visibility", "visible");
  qNumber = 1;

  //   show results
  //   $("#results").append(

  //   );
}
