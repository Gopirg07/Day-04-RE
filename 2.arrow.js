 //a.Print the odd numbers in the array using arrow function. 
 var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; 
 var b=[];

 var fn=(a)=>{ 
 for(i=0;i<arr.length;i++)
 { 
     if(arr[i]%2!=0)
     {
        b.push(arr[i]);
     }
  }
  console.log(b);
 };
 fn(arr);
 
  //b.Convert all string to title caps in a array
  var arr=["gOpI","NaTH","gOpINaTH"];
  var b=[];
  var fn=(c)=>{ 
     for(i=0;i<arr.length;i++){
          b.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase()); 
     }
     console.log(b);
  };
  fn(arr);
  
 
 //c.Sum of all numbers in an array
 var arr=[1,2,3,4,5];
 var temp=0;
 
 var fn=(a)=>{
     for(i=0;i<a.length;i++)
     {
         temp+=a[i];
     }
     console.log(temp);
 };
 fn(arr);
 


 // d.return all the prime numberes in a array.

 var arr= [1,2,3,4,5,6,7,8,9,10,11];
 var fn=(a)=>{
     var srt = arr.filter(function(num){
         var size = num/2;
         for(i=2;i<=size;i++)
         {
             if(num%i === 0)
             {
                 return false;
             }
         }
         return true;
     })
     console.log(srt);
 };
 fn(arr);
 

 // e. return all the palindrome numbers in a array.

 var ar=[111,121,123,212,322,323,321,313];
 var brr=[];
 var gopi=(arr)=>{
     var a,b,d,c;
     for(i=0;i<arr.length;i++)
     {
         var num = parseInt(arr[i]);
         c=0;
         while(num > 0)
         {
             b=num%10;
             num=Math.floor(num/10);
             c=c*10+b;
         }
         if(c==arr[i])
         {
             brr.push(arr[i]);
         }
     }
     console.log(brr);
 }
 gopi(ar); 