// fetch(urls + 'burger').then((respon)=>{
//       return respon.json();
// }).then((recipiey)=>{ 

//     console.log(recipiey.meals );   
//       var manus =   recipiey.meals[0]; 

//     for(var strs in manus){
//         console.log(manus[strs]);   
//     }

// }) 



// const mykey = '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';
//  const chatui = "https://api.openai.com/v1/chat/completions";

// const request = {
//       method: "POST",   
//        headers:{
//         "Content-Type" : "application/json",
//         "Authorization ":`Bearer ${mykey}`
//       },

//       body: JSON.stringify({
//         "model": "gpt-3.5-turbo",
//         "messages": [{role: "user", content: "hello"}] 
//       })


// } 
// const apiKey = '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';
// const prompt = 'tell me a song';

// fetch('https://api.openai.com/v1/chat/completions', {
//   method: 'POST',
//   headers: { 
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`,
//   },
//   body: JSON.stringify({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: prompt }],
//   }),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error(error);

//   });


// fetch(chatui,request).then((responses)=>{       
//      return responses.json();      
// }).then((get_res)=>{
//      console.log(get_res);    
// }).catch((eror)=>{
//     console.log(eror);
// }) 



//   whether api key  

// const key = "7a93f85e712daea1ed01b080a2ced17d";  
// const city_name = "new york";      

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`).then((wth)=>{
//    return wth.json();   
// }).then((datawth)=>{
//      console.log(datawth);
// }).catch((error)=>{
//     console.log(error);
// })

var openchat = document.getElementById('open_chatbooot');
var chatpanel = document.getElementById('chatpanel');
var user_btn = document.getElementById('user_btn');
var chatmassage = document.getElementById('chatmassage');

openchat.addEventListener('click', (e) => {
    e.preventDefault();
    chatpanel.classList.toggle('cahtactive');

})



user_btn.addEventListener('click', (e) => {
    var user_msg = document.getElementById('user_msg').value;
    e.preventDefault();
   var  usersend = `    <div class="chat chat-end ">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img src="images.png" />
    </div>
  </div>
  <div class="chat-header">
    User
  </div>
  <div class="chat-bubble">${user_msg}</div>
</div>`;    
chatmassage.insertAdjacentHTML('beforeend',usersend);
var author = `     <div id="rendom" class="chat chat-start">
<div class="chat-image avatar">
  <div class="w-10 rounded-full">
    <img src="web_logo.png" />
  </div>
</div>
<div class="chat-header">
  Md Nahid Hasan  
  <time class="text-xs opacity-50">12:45</time>
</div>
<div class="chat-bubble">Thinking....</div>
</div>`
chatmassage.insertAdjacentHTML('beforeend',author);

var scrl = chatmassage.scrollHeight;
if(scrl > 405 ){ 
  chatmassage.scrollTo({top: scrl, behavior: "smooth"}); 
 }
  
const apiKey = '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';


fetch('https://free.churchless.tech/v1/chat/completions', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: user_msg }],
  }),
})
  .then(response => response.json())
  .then(data => {

   
    var respomassage = data.choices[0].message.content;

    setTimeout(()=>{  
      document.getElementById('rendom').remove();
        usersend = `     <div class="chat chat-start">
       <div class="chat-image avatar">
         <div class="w-10 rounded-full">
           <img src="web_logo.png" />
         </div>
       </div>
       <div class="chat-header">
         Md Nahid Hasan
         <time class="text-xs opacity-50">12:45</time>
       </div>
       <div class="chat-bubble">${respomassage}</div>
     </div>`
     
     chatmassage.insertAdjacentHTML('beforeend',usersend)


      var scr = chatmassage.scrollHeight;
      if(scr > 405 ){ 
        chatmassage.scrollTo({top: scr, behavior: "smooth"}); 
       }
  
     },1000)
  })

  .catch(error => {
    usersend = `     <div id="rendom" class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img src="web_logo.png" />
      </div>
    </div>
    <div class="chat-header">
      Md Nahid Hasan
      <time class="text-xs opacity-50">12:45</time>
    </div>
    <div class="chat-bubble">Thinking....</div>
  </div>`
    console.error(error);

    if(405 < scrl ){ 
        chatmassage.scrollTo({top: scrl, behavior: "smooth"}); 
      }
  
  });


   
})


function onSignIn() {
  gapi.load('auth2', function () {
    gapi.auth2.init({
      client_id: '590435469496-hh58for0rnt8vl80r7pm8njtctqd9l5e',
    }).then(function () {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    });
  });
}

// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}