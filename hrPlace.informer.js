var hrClass = "";
switch(scorehr)
{
    case null:
        hrClass = "XX-520";
        break;
    case 1:
        hrClass = "PW-111";
        break;
    case 2:
        hrClass = "HR-112";
        break;
    case 3:
        hrClass = "HR-211";
        break;
    case 4:
        hrClass = "HR-212";
        break;
    case 9:
        hrClass = "PW-110";
        break;
}
if (coursenumberandsectionactive.join().search(hrClass)>-1)
{
    "<div style='color:navy'>"+hrClass+": done."
}
else
{
    "<div style='color:#990000'>"+hrClass+": needed."
}
