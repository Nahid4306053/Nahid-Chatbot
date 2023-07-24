
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




