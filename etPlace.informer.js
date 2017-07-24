var etClass = new String();
switch(scoreet) 
{
    case null:
        etClass = "XX-500";
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
        etClass = "ET-111";
        break;
    case 14:
    case 15:
    case 16:
        etClass = "ET-112";
        break;
    case 17:
    case 18:
    case 19:
        etClass = "ET-211";
        break;
    case 20:
    case 21:
    case 22:
        etClass = "ET-212";
}
if (coursenumberactive.join().search(etClass)>-1)
{
    "<div style='color:navy'>"+etClass+": done.";
} 
else 
{
    "<div style='color:#990000'>"+etClass+": needed.";
}
