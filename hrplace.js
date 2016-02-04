//XX-520	HR score of null
//PW-111	HR score of 1 and PW score of 0
//HR-112	HR score of 2
//HR-211	HR score of 3
//HR-212	HR score of 4
var hrclass = new String();
switch(scorehr) 
{
    case null:
        hrclass = "XX-520";
        break;
    case 1:
        hrclass = "PW-111";
        break;
    case 2:
        hrclass = "HR-112";
        break;
    case 3:
        hrclass = "HR-211";
        break;
    case 4:
        hrclass = "HR-212";
        break;
}
if (coursenumberactive.join().search(hrclass)>-1) 
{
    "<div style='color:navy'>"+hrclass+": done."
} 
else 
{
    "<div style='color:#990000'>"+hrclass+": needed."
}