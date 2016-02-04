//ESL X -- XX-552 -- Michigan score of 1
//ESL 1 -- LENG-102 -- Michigan score of 2
//ESL 2 -- LENG-104 -- Michigan score of 4
//ESL 3 -- LENG-105 -- Michigan score of 5
//ESL 4 -- LENG-106 -- Michigan score of 6
//ELLA student -- Special section of LENG-111 block registered by Benjamin -- Degree student who is a ELLA cohort member (warning message will pop up in XENS)
//ENG 1 -- LENG-111 -- Degree student with a Michigan score of null or 11
//ENG 2 -- LENG-201 -- Degree student with a Michigan score of null or 11 and transfer credit for LENG-111
//ENG 3 -- LAHS-231 -- Degree student with a Michigan score of null or 11 and transfer credit for LENG-111 and LENG-201
//ENG 4 -- LMAS-230-003 or LMAS-352-003 -- Degree student with a Michigan score of null or 11 and transfer credit for LENG-111, LENG-201, and LAHS-231
if (activeprogram.search('PDM') == 0)  
{
"<div style='color:navy'> No liberal arts class needed: non-ESL PDM student."
}
else
{
    var liberalartsclass = new String();
    switch(scoremichigan)
    {
        case null:
        case 11:
            var completedcourses = transfercourses.concat(bSttrNcCourses).sort().join();
            if (completedcourses.search("LENG-111") == -1) 
            {
                liberalartsclass = "LENG-111";
            } 
            else if (completedcourses.search("LENG-201") == -1) 
            {
                liberalartsclass = "LENG-201";
            } 
            else if (completedcourses.search("LAHS") == -1) 
            {
                liberalartsclass = "LAHS-231";
            } 
            else 
            {
                liberalartsclass = "LMAS";
            }
            break;
        case 0:
        case 1:
            liberalartsclass = "XX-552";
            break;
        case 2:
            liberalartsclass = "LENG-102";
            break;
        case 4:
            liberalartsclass = "LENG-104";
            break;
        case 5:
            liberalartsclass = "LENG-105";
            break;
        case 6:
            liberalartsclass = "LENG-106";
            break;
    }
    coursenumberandsectionactive.join().search(liberalartsclass)>-1 ? "<div style='color:navy'>"+liberalartsclass+": done." : "<div style='color:#990000'>"+liberalartsclass+": needed.";
}