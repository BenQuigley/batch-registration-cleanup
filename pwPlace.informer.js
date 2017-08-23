var pwClass = "";
switch(scorehr)
{
    case 9:
        pwClass = "PW-110";
        break;
    case 1:
        pwClass = "PW-111";
        break;
}
if (pwClass === "")
{
    switch(scorepw)
    {
        case null:
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
}
if (coursenumberactive.join().search(pwClass)>-1)
{
    "<div style='color:navy'>"+pwClass+": done."
} 
else 
{
    "<div style='color:#990000'>"+pwClass+": needed."
}
