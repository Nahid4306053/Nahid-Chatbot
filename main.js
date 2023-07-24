
var openchat = document.getElementById('open_chatbooot');
var chatpanel = document.getElementById('chatpanel');
var user_btn = document.getElementById('user_btn');
var chatmassage = document.getElementById('chatmassage');

openchat.addEventListener('click', (e) => {
    e.preventDefault();
    chatpanel.classList.toggle('cahtactive');

})

 var usermsgfun = (user_msg) =>{
  return `    <div class="chat chat-end ">
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

} 

var waiting = () =>{
  return `     <div id="rendom" class="chat chat-start">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img src="web_logo.png" />
    </div>
  </div>
  <div class="chat-header">
    Md Nahid Hasan  
    <time class="text-xs opacity-50">12:45</time>
  </div>
  <div class="chat-bubble">Give me a moment....</div>
  </div>`

}
user_btn.addEventListener('click', (e) => {
    var user_msg = document.getElementById('user_msg').value;
    e.preventDefault();
   var  usersend =   usermsgfun(user_msg);
   var author = waiting();
chatmassage.insertAdjacentHTML('beforeend',usersend);
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

        console.log(respomassage);
 
         var keys = {
          'ChatGPT': 'a Software',
          'GPT-3.5': '',
          'As of my last update in September 2021': 'According to my Developer Md Nahid    Hasan knowledge',
          'September 2021': '',
          'OpenAI': 'Developer Md Nahid Hasan'
         }

        for(var rep in keys){
            if(respomassage.includes(rep)){
          respomassage  =   respomassage.replace(rep, keys[rep]);
          } 

        }
        
        respomassage  =   respomassage.replace(/\n/g, "<br>");
              
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
     waiting();
    console.error(error);
    if(405 < scrl ){ 
        chatmassage.scrollTo({top: scrl, behavior: "smooth"}); 
      }
  
  });


   
})




