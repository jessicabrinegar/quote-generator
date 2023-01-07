import "./style.css";

window.onload = function() {
  let btn = document.querySelector("#new-quote");
  let quote = document.querySelector(".quote");

  const quotes = [
    {
      quote: `"Don't surrender all your joy for an idea you used to have about yourself that isn't true anymore."`
    },
    {
      quote: `"The best thing you can possibly do with your life is to tackle the motherfucking shit out of it."`
    },
    {
      quote: `“You will learn a lot about yourself if you stretch in the direction of goodness, of bigness, of kindness, of forgiveness, of emotional bravery. Be a warrior for love.”`
    },
    {
      quote: `“The story of human intimacy is one of constantly allowing ourselves to see those we love most deeply in a new, more fractured light. Look hard. Risk that.”`
    },
    {
      quote: `“Forgiveness doesn't sit there like a pretty boy in a bar. Forgiveness is the old fat guy you have to haul up a hill.”`
    },
    { quote: `“Let yourself be gutted. Let it open you. Start here.”` },
    {
      quote: `“You have to say I am forgiven again and again until it becomes the story you believe about yourself.”`
    },
    {
      quote: `“It is impossible for you to go on as you were before, so you must go on as you never have.”`
    },
    {
      quote: `“But the reality is we often become our kindest, most ethical selves only by seeing what it feels like to be a selfish jackass first.”`
    }
  ];

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
  });
};
