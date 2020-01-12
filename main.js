function getChange() {
    document.getElementById('calculate-change').addEventListener('click', function(){
        let given = document.getElementById('amount-received').value;
        let price = document.getElementById('amount-due').value;
        let result = (given - price).toFixed(2);
    
    document.getElementById('form').innerHTML = ('Your change is ' + result);
        let dollars = Math.floor(result);
    document.getElementById('dollars-output').innerHTML = dollars;
        let cents = Math.round((result - dollars)*100)
            if(given >= price){
        let quarters = Math.floor(cents/25);    
            cents = cents - quarters * 25; 
    document.getElementById('quarters-output').innerHTML = quarters;
        let dimes = Math.floor(cents/10);       
            cents = cents - dimes * 10;
    document.getElementById('dimes-output').innerHTML = dimes;
        let nickels = Math.floor(cents/5);
            cents = cents - nickels * 5;    
    document.getElementById('nickels-output').innerHTML = nickels;       
        let pennies = Math.floor(cents/1);
            cents = cents - pennies * 1;
    document.getElementById('pennies-output').innerHTML = pennies;
  
    }else{
    }
  });
} 


getChange();