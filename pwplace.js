//XX-510	PW score of null or 4
//PW-111	HR score of 1 and PW score of 0
//AR-111	PW score of 1
//AR-112	PW score of 2
//AR-201	PW score of 3

var pwclass = new String();
switch(scorepw)
{
    case null:
    case 4:
        pwclass = "XX-510";
        break;
    case 0:
        pwclass = "PW-111";
        break;
    case 1:
        pwclass = "AR-111";
        break;
    case 2:
        pwclass = "AR-112";
        break;
    case 3:
        pwclass = "AR-201";
        break;
}
if (coursenumberactive.join().search(pwclass)>-1) 
{
    "<div style='color:navy'>"+pwclass+": done."
} 
else 
{
    "<div style='color:#990000'>"+pwclass+": needed."
}
