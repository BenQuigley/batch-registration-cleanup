var activeetcourses = [];
var activecourses = coursenumberactive.join();
var activearray = activecourses.split(",")
for (i in activearray)
{
    if (activearray[i].indexOf("XX-500") == 0) 
    {
        activeetcourses.push(activearray[i]);
        continue;
    }
    if (activearray[i].indexOf("ET-") == 0)
    {
        activeetcourses.push(activearray[i]);
        // continue;
    }
}
activeetcourses.length == 0 ? "<div style='color:darkgreen'>No ET courses enrolled." : "<div style='color:darkgreen'>" + activeetcourses.join();