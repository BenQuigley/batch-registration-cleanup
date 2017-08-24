var diploma = false;
if (activeprogram.search('PD') === 0 || activeprogram.search('TW') === 0) {
    diploma = true;
}
if (diploma === true && scoremichigan === 11) {
    "<div style='color:navy'> No liberal arts class needed: non-ESL PDM student.";
}
else {
    var possibleCourses = [];
    switch (scoremichigan) {
        case 11:
            var completedCourses = transfercourses.concat(bSttrNcCourses).sort().join();
            if (completedCourses.search("LENG-111") === -1) {
                possibleCourses.push("LENG-111");
            }
            else if (completedCourses.search("LENG-201") === -1) {
                possibleCourses.push("LENG-201");
            }
            else if (completedCourses.search("LAHS-231") === -1) {
                possibleCourses.push("LAHS-231");
                possibleCourses.push("LMAS-");
                possibleCourses.push('LAHS-');
            }
            else
            {
                possibleCourses.push('XX-551');
            }
            break;
        case null:
        case 0:
        case 1:
            possibleCourses.push("XX-552");
            break;
        case 2:
            possibleCourses.push("LENG-102");
            break;
        case 4:
            possibleCourses.push("LENG-104");
            break;
        case 5:
            possibleCourses.push("LENG-105");
            break;
        case 6:
            possibleCourses.push("LENG-106");
            break;
    }
    var courseEnrolled = "";
    for (i in possibleCourses) {
        var course = possibleCourses[i];
        for (j in coursenumberandsectionactive) {
            var sec = coursenumberandsectionactive[j];
            if (sec.indexOf(course) >= 0) {
                courseEnrolled = sec;
                break;
            }
        }
        if (courseEnrolled) {
            break;
        }
    }
    if (courseEnrolled)
    {
        "<div style='color:navy'>"+courseEnrolled+": done.";
    }
    else{
        "<div style='color:#990000'>"+possibleCourses.join(' or ')+": needed.</div>";
    }
}
