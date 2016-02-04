//2016SP rules:
//XX-500	Ear Training score of null
//ET-111	Ear Training score of 0 to 13
//ET-112	Ear Training score of 14 to 16
//ET-211	Ear Training score of 17 to 19
//ET-212	Ear Training score of 20 to 22
var etclass = new String();
switch(scoreet) 
{
    case null:
        etclass = "XX-500";
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
        etclass = "ET-111";
        break;
    case 14:
    case 15:
    case 16:
        etclass = "ET-112";
        break;
    case 17:
    case 18:
    case 19:
        etclass = "ET-211";
        break;
    case 20:
    case 21:
    case 22:
        etclass = "ET-212";
}
if (coursenumberactive.join().search(etclass)>-1) 
{
    "<div style='color:navy'>"+etclass+": done.";
} 
else 
{
    "<div style='color:#990000'>"+etclass+": needed.";
}