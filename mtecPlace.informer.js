var completedCourses = transfercourses.concat(bSttrNcCourses).sort().join();
var allowableCourses = [];
var esl = parseInt(scoremichigan);
if (coursenumberandsectionactive.join().indexOf('PM-111') >= 0) {
    var result = "<div style='color:navy'>Student was pre-registered in PM-111 per Bob Mulvey.";
}
else {
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
    if (esl >= 2 && esl <= 4) {
        var result = "<div style='color:navy'>None needed (ESL).";
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
            var result = "<div style='color:navy'>"+section_match+": done.";
        }
        else
        {
            var result = "<div style='color:#990000'>"+allowableCourses.join(' or ')+": needed.";
        }
    }
}
result;