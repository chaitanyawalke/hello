exports.fact=function(n)
{
    var n3=parseInt(n);
    var fact=1;
    while(n3>0)
    {
        fact=fact*n3;
        n3=n3-1;
    }
    return fact;
}