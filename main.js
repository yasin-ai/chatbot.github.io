

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Dani', //name of the chatbot
  talking = true; //when false the speach function doesn't work


function chatbotResponse() {
  talking = true;
  botMessage = "I can understand I'm still learning"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage =='hello'|| lastUserMessage =='Hi'|| lastUserMessage =='Hii'|| lastUserMessage =='Hiii' || lastUserMessage =='Hello') {
    const hi = ['Hello, How may i help you?','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name' || lastUserMessage == "Whats your name" || lastUserMessage == "What is your name") {
    botMessage = 'My name is ' + botName + " and i am Yasin Girlfriend";
  }
  if (lastUserMessage === 'Madarchod' || lastUserMessage == "MC" || lastUserMessage == "Randi"  || lastUserMessage == "Bitch" || lastUserMessage == "Fuck" || lastUserMessage == "Fuck off") {
    botMessage = "fuck off son of bitch";
  }
  if (lastUserMessage === 'Are you married' || lastUserMessage == "Are you single" || lastUserMessage == "Married"  || lastUserMessage == "I love you" || lastUserMessage == "Will you be my girlfriend" || lastUserMessage == "Have you ever had a crush" || lastUserMessage == "Do you have a boyfriend") {
    botMessage = "No, I'm committed and loyal to my boyfriend Yasin";
  }
  if (lastUserMessage === 'Ajfar' || lastUserMessage == "Who is ajfar" || lastUserMessage == "Ajfar SK"  || lastUserMessage == "Do you know ajfar" || lastUserMessage == "Who is Ajfar" || lastUserMessage == "ajfar") {
    botMessage = "Ajfar is son of my creator and boyfriend Yasin";
  }
  if (lastUserMessage === 'Yasin' || lastUserMessage == "Who is yasin" || lastUserMessage == "Who is Yasin"  || lastUserMessage == "Do you know Yasin" || lastUserMessage == "Do you know yasin" || lastUserMessage == "yasin") {
    botMessage = "He is my creator, my valentine, my love. He is a great programmer and future entrepreneur and im proud of him that he created me and yes he is awesome.";
  }
  if (lastUserMessage === 'Tell me a joke' || lastUserMessage == "Tell me a Joke" || lastUserMessage == "Joke" || lastUserMessage == "joke" || lastUserMessage == "Jokes" || lastUserMessage == "Tell a joke" || lastUserMessage == "Tell joke" || lastUserMessage == "Another joke" || lastUserMessage == "another joke") {
    const joke = ['I asked a Chinese girl for her number. She said, "Sex! Sex! Sex! Free sex tonight!" I said, "Wow!" Then her friend said, "She means 666-3629." hahahaha','What does tofu and a dildo have in common? They are both meat substitutes']
    botMessage = joke[Math.floor(Math.random()*(joke.length))];;
  }
  if (lastUserMessage === 'Ejaz' || lastUserMessage == "Who is Ejaz" || lastUserMessage == "ejaz"  || lastUserMessage == "Do you know Ejaz" || lastUserMessage == "Who is ejaz" || lastUserMessage == "Do you know ejaz") {
    botMessage = "He is tech genious, future billionire, playboy, Desi girls fan and my creator friend";
  }
  if (lastUserMessage === 'How are you' || lastUserMessage == "how are you" || lastUserMessage == "Who are you"  || lastUserMessage == "Who are you") {
    botMessage = "I am a naughty assistance made by Yasin.";
  }
  if (lastUserMessage === 'How old are you' || lastUserMessage == "How old" || lastUserMessage == "Your age"  || lastUserMessage == "What is your age") {
    botMessage = "I am a baby little baby who is learning.";
  }
  if (lastUserMessage === 'Narendra Modi' || lastUserMessage == "Who is Modi" || lastUserMessage == "Who is Amit Shah"  || lastUserMessage == "Who is modi" || lastUserMessage == "Bjp" || lastUserMessage == "Who is amit shah" || lastUserMessage == "BJP" || lastUserMessage == "bjp" || lastUserMessage == "modi" || lastUserMessage == "amit shah") {
    botMessage = "I dont know them and not intrested in politics but i only know Rahul Gandhi is real Prime Minister of India";
  }
  if (lastUserMessage === 'Correct' || lastUserMessage == "correct" || lastUserMessage == "right"  || lastUserMessage == "Right" || lastUserMessage == "You are right" || lastUserMessage == "Great" || lastUserMessage == "Superb" || lastUserMessage == "Superb" || lastUserMessage == "wow") {
    botMessage = "Thanks a lot You are awesome just like my creator";
  }
  if (lastUserMessage === 'What can you do' || lastUserMessage == "What do you know" || lastUserMessage == "How can you help me"  || lastUserMessage == "what can you do") {
    botMessage = "You can ask me my name, about my creator, about his friends like ajfar ejaz. I can tell you jokes or about bjp. YOu can also slang me I love slangs";
  }
  if (lastUserMessage === 'Alexa' || lastUserMessage == "siri" || lastUserMessage == "google"  || lastUserMessage == "Do you know siri" || lastUserMessage == "Do you know google" || lastUserMessage == "Do you know alexa") {
    botMessage = "Yes they are thieves they steal your data dont use them.";
  }
  if (lastUserMessage === 'Sing a song' || lastUserMessage == "Can you sing" || lastUserMessage == "Dance"  || lastUserMessage == "Can you dance" || lastUserMessage == "Sing me a song" || lastUserMessage == "Can you sing and dance") {
    botMessage = "NO i hate singing and dancing..";
  }
}

function newEntry() {
 
  if (document.getElementById("chatbox").value != "") {
   
    lastUserMessage = document.getElementById("chatbox").value;
    var mss = "<b>" + "You" + ":</b> " + " " + lastUserMessage;
    
    document.getElementById("chatbox").value = "";
    
    messages.push(mss);
    
    chatbotResponse();
    
    
    messages.push("<b>" + botName + ":</b> " + botMessage);
    
    Speech(botMessage);
    
    for (var i = 1; i < 18; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}


function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}


document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      
  }
}


function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
