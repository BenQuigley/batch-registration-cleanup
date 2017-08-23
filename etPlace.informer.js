var etClass = "";
var academic = scoreaiacademic;
var rawWriting = bSttrRawWsScore;gi
switch(scoreet)
{
    case null:
        etClass = "XX-500";
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if (academic === 1 && 0 <= rawWriting <= 40)
        {
            etClass = "ET-110";
            break;
        }
        else if (academic === 2 && 0 <= rawWriting <= 20)
        {
            etClass = "ET-110";
            break;
        }
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
        if (academic === 0 && 0 <= rawWriting <= 40)
        {
            etClass = "ET-110";
            break;
        }
        else if (academic === 1 && 0 <= rawWriting <= 20)
        {
            etClass = "ET-110";
            break;
        }
        else
        {
            etClass = "ET-111";
            break;
        }
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
