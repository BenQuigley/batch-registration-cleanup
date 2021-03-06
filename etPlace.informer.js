/*
 Returns the Ear Training class required for the student,
 including higher-level classes for students with higher ESPA
 scores.
 */
var etClass = "";
var academic = scoreaiacademic;
var rawWriting = bSttrRawWsScore;

// Require an ET score for everyone:

if (scoreet === null) {
    etClass = "XX-500";
}

// Handle eligibility for ET Fundamentals course:

else if (scoreet >= 0 && scoreet <= 13) {

    // Only require a Raw Writing score if the other two scores
    // are both in the danger zone:

    if (academic <= 2 && rawWriting === null) {
        etClass = "XX-520";
    }
    else if (academic === 0 && rawWriting <= 40) {
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

// Handle the regular ET placements:

else if (scoreet <= 16) {
    etClass = "ET-112";
}
else if (scoreet <= 19) {
    etClass = "ET-211";
}
else if (scoreet <= 22) {
    etClass = "ET-212";
}

// Render the score:

var section_match = "";
for (i in coursenumberandsectionactive) {
    var sec = coursenumberandsectionactive[i];
    if (sec.indexOf(etClass) >= 0) {
        section_match = sec;
        break;
    }
}

if (section_match) {
    "<div style='color:navy'>"+section_match+": done.";
} 
else 
{
    "<div style='color:#990000'>"+etClass+": needed.";
}