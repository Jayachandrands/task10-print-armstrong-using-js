let num = 153;
let sum = 0;
let n = num;
while(num>0) {
    rem = num%10;
    sum = sum+(rem*rem*rem);

    if(rem>=5){
        num = num-rem;
    }
    let lastdigit = num/10;
    num = Math.round(lastdigit);
    console.log(n);
}if(n==sum){
    console.log("given no is armstrong");
}else
{
    console.log("given no is not armstrong");
}