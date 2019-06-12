function isFibonacci(num)
{
return(Math.sqrt(5 * num * num + 4) % 1 === 0 || Math.sqrt(5 * num * num - 4) % 1 === 0);
}
module.exports=isFibonacci;