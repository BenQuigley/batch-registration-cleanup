/*
 Returns the Harmony class required for the student,
 including higher-level classes for students with higher ESPA
 scores.
 */

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
var section_match = "";
for (i in coursenumberandsectionactive) {
    var sec = coursenumberandsectionactive[i];
    if (sec.indexOf(hrClass) >= 0) {
        section_match = sec;
        break;
    }
}
if (section_match)
{
    "<div style='color:navy'>"+section_match+": done."
}
else
{
    "<div style='color:#990000'>"+hrClass+": needed."
}
