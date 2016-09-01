// ESL X -- XX-552 -- Michigan score of blank, 0, or 1
// ESL 1 -- LENG-102 -- Michigan score of 2
// ESL 2 -- LENG-104 -- Michigan score of 4
// ESL 3 -- LENG-105 -- Michigan score of 5
// ESL 4 -- LENG-106 -- Michigan score of 6
// ELLA student -- Special section of LENG-111 block registered by Benjamin -- Degree student who is a ELLA cohort member (warning message will pop up in XENS)
// ENG 1 -- LENG-111 -- Degree student with a Michigan score of null or 11
// ENG 2 -- LENG-201 -- Degree student with a Michigan score of null or 11 and transfer credit for LENG-111
// ENG 3 -- possible_courses.push('LAHS-231 -- Degree student with a Michigan score of null or 11 and transfer credit for LENG-111 and LENG-201
// ENG 4 -- LMAS-230-003 or LMAS-352-003 -- Degree student with a Michigan score of null or 11 and transfer credit for LENG-111, LENG-201, and possible_courses.push('LAHS-231

if (activeprogram.search('PDM') == 0 && scoremichigan == 11)
{
    "<div style='color:navy'> No liberal arts class needed: non-ESL PDM student."
}
else
{
    var possible_courses = new Array();
    switch (scoremichigan)
    {
        case 11:
            var completedcourses = transfercourses.concat(bSttrNcCourses).sort().join();
            if (completedcourses.search("LENG-111") == -1) 
            {
                possible_courses.push("LENG-111");
            } 
            else if (completedcourses.search("LENG-201") == -1) 
            {
                possible_courses.push("LENG-201");
            } 
            else if (completedcourses.search("LAHS") == -1) 
            {
                possible_courses.push("LAHS-231");
            } 
            else 
            {
                possible_courses.push("LMAS-230-003");
                possible_courses.push('LMAS-250-003');
                possible_courses.push('LAHS-232');
                possible_courses.push('LAHS-233-006');
                possible_courses.push('LAHS-233-001');
                possible_courses.push('LAHS-233-003');
                possible_courses.push('LAHS-P234');
            }
            break;
        case null:
        case 0:
        case 1:
            possible_courses.push("XX-552");
            break;
        case 2:
            possible_courses.push("LENG-102");
            break;
        case 4:
            possible_courses.push("LENG-104");
            break;
        case 5:
            possible_courses.push("LENG-105");
            break;
        case 6:
            possible_courses.push("LENG-106");
            break;
    }
    var done = false;
    for (course in possible_courses)
    {
        if (coursenumberandsectionactive.join().search(course) > -1)
        {
            var course_enrolled = possible_courses[course];
            done = true;
            "<div style='color:navy'>"+course_enrolled+": done.";
        }
    }
    if (done == false)
    {
        "<div style='color:#990000'>"+possible_courses.join(' or ')+": needed.";
    }
}
