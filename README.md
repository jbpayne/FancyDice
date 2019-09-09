### FancyDice

Given the following rules for the game of dice, create a program that prints out whether you won or lost on each roll. Below are the requirements for this program.  
  
The player rolls two 6-sided dice (hint: use 1 + (int)(Math.random() * 6) ) to generate a random number between 1 and 6.  
  
Rolling 7 or 11 on the first try is a WIN  
Rolling 2, 3 or 12 on the first try is a LOSE  
Any other roll on the first try becomes the player's POINT  
If a player rolled POINT, the player continues to roll until one of two things happens:  
If a player has POINT and rolls the POINT again, it is a WIN  
If a player has POINT and rolls 7, it is a LOST  
  
Example runs:  
```  
You rolled 7.  
You win!  
```  
```
You rolled 12.  
You lose!  
```  
```
You rolled 4. POINT is 4.  
You rolled 3. POINT is 4.  
You rolled 11. POINT is 4.  
You rolled 4.  
You win!  
```  
