var pwClass = new String();
switch(scorepw)
{
    case null:
    case 4:
        pwClass = "XX-510";
        break;
    case 0:
        pwClass = "PW-111";
        break;
    case 1:
        pwClass = "AR-111";
        break;
    case 2:
        pwClass = "AR-112";
        break;
    case 3:
        pwClass = "AR-201";
        break;
}
if (coursenumberactive.join().search(pwClass)>-1)
{
    "<div style='color:navy'>"+pwClass+": done."
} 
else 
{
    "<div style='color:#990000'>"+pwClass+": needed."
}
