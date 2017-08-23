var etClass = "";
var academic = scoreaiacademic;
var rawWriting = bSttrRawWsScore;
if (scoreet === null) {
    etClass = "XX-500";
}
else if (scoreet >= 0 && scoreet <= 13 && rawWriting != null && academic != null) {
    if (academic === 0 && rawWriting <= 40) {
        etClass = "ET-110";
    }
    else if (scoreet <= 6 && academic === 1 && rawWriting <= 40) {
        etClass = "ET-110";
    }
    else if (scoreet <= 6 && academic === 2 && rawWriting <= 20) {
        etClass = "ET-110";
    }
    else if (academic === 1 && rawWriting <= 20) {
        etClass = "ET-110";
    }
    else {
        etClass = "ET-111";
    }
}
else if (scoreet <= 16) {
    etClass = "ET-112";
}
else if (scoreet <= 19) {
    etClass = "ET-211";
}
else if (scoreet <= 22)
{
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
