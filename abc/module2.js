exports.fact=function(n)
{    var n3=parseInt(n);
    var fact=1;
    while(n>0)
    {
        fact=fact*n;
        n=n-1;
    }
    return fact;s
}

exports.table=function(n)
{
    var n3=parseInt(n);
    var ans=[];
    var res=1;
    for(var i=1;i<=10;i++)
    {
        res=i*n3;
       ans.push(res);
       console.log(ans);
       return ans;
    }  
}

exports.prime=function(n)
{
    var n3=parseInt(n);
    var count=0;
    for(var i=1;i<=n3;i++)
    {
        if(n3%i===0)
        {
            count=count+1;
        }

    }
    if(count===2)
    {
       return 1;
    }
    else{
      return 0;
    }
}