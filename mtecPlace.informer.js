var completedCourses = transfercourses.concat(bSttrNcCourses).sort().join();
var allowableCourses = [];
var esl = parseInt(scoremichigan);
if (completedCourses.search("MTEC-111") === -1) {
    allowableCourses.push('MTEC-111');
} 
else 
{
    if (completedCourses.search("MP-110") === -1) {
        allowableCourses.push('MP-110');
    } 
    if (completedCourses.search("MP-113") === -1) {
        allowableCourses.push('MP-113');
    } 
    if (completedCourses.search("MTEC-214") === -1) {
        allowableCourses.push('MTEC-214');
    }
}
if (allowableCourses === []) {
    allowableCourses.push("XX-570");
}
if (esl <= 4) {
    "<div style='color:navy'>None needed (ESL).";
}
else {
    var section_match = "";
    for (i in allowableCourses) {
        var allowableCourse = allowableCourses[i];
        for (j in coursenumberandsectionactive) {
            var sec = coursenumberandsectionactive[j];
            if (sec.indexOf(allowableCourse) >= 0) {
                section_match = sec;
                break;
            }
        }
        if (section_match) {
            break;
        }
    }
    if (section_match)
    {
        "<div style='color:navy'>"+section_match+": done.";
    }
    else
    {
        "<div style='color:#990000'>"+allowableCourses.join(' or ')+": needed.";
    }
}