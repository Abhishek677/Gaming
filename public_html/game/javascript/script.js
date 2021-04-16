 var max_tries=5;
      var i=0;var j=0;

      userInput();            //func calling here

      function userInput()
      {   //start of function
            
        var x = prompt("Enter Number between 1 and 9");
        var usrnum = parseInt(x);
        
        if(usrnum>0 && usrnum<=9)
        {
          alert("You Picked Number: "+ usrnum)
        }
        else
        {
          alert("You Entered Invalid Number");

          if(max_tries-- >0)  
          userInput();
        }

         var compnum = Math.floor(Math.random()*10);
         alert("The Number Picked by Computer is "+ compnum);

        sum=usrnum+compnum;

        if(sum%2==0)
        {
          alert("Result is Even So You win!");
          i++;
        }
        else
        {
           alert("Result is Odd So Computer win!");
           j++;
        }

         var x = confirm("If You Want to Play Again Then Press OK else CANCEL");

        if(x==true)
        {
          userInput();  
        }
        else
        {
          alert("     Your Final Score is: " + i +   "                Your Opponent Final Score is: " + j );

        if(i>j)
        {
          alert("BOOYAH! You Are The Winner!!!");
        }
        else if(j>i)
        {
          alert("Computer is the Winner!!!");
        }
        else
        {
          alert("Match is Tied between You and Computer No one is Winner!");
        }  
        }
      } //end of function block
    