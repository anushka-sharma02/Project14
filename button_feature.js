var btn=document.querySelector("button");
var flag=0;
var connection_status=document.querySelector("h5");
btn.addEventListener("click",function(){
      if(flag==0){
          connection_status.innerHTML="Friend";
          connection_status.style.color="green";
          btn.innerHTML="Remove Friend";
          btn.style.backgroundColor="rgb(201, 198, 198)";
          btn.style.color="black";
          flag=1;
      }else{
        connection_status.innerHTML="Stranger";
        connection_status.style.color="red";
        btn.innerHTML="Add Friend";
        btn.style.backgroundColor="cornflowerblue";
        btn.style.color="white";
        flag=0;
      }
})