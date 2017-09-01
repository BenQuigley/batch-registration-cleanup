/*
 Evaluates whether students have enough test scores on file to evaluate
 whether they qualify for for AA-101 SmartStart.
 Returns the list of missing scores if there are any;
 Returns "True" if students qualify,
 or "False" if they do not.
 */

var etScore = scoreet;
var hrScore = scorehr;
var rawHr1Score = bSttrRawHScore;
var academic = scoreaiacademic;
var rawWriting = bSttrRawWsScore;
var allScores = {'ET Score': etScore, 'HR Score': hrScore, 'HR Raw Score 1': rawHr1Score,
                 'A&I Acad Rating': academic, 'PW Raw Writing Score': rawWriting};

// Require scores for everyone.
var missingScores = [];
for (scoreName in allScores) {
    var score = allScores[scoreName];
    if (!score || score === '') {
        missingScores.push(scoreName);
    }
}
var result = "";
if (missingScores.length > 0)
{
    result = "Missing scores:\n"+missingScores.join('\n');
}

// Handle eligibility for PW SmartStart course.
else if (hrScore === 9) {
    result = 'True';
}
else if (academic === 2 && rawHr1Score <= 10 && etScore <= 6 && rawWriting <= 10) {
    result = "True";
}
else if (academic <= 1 && rawHr1Score <= 20 && etScore <= 13 && rawWriting <= 40) {
    result = "True";
}
else {
    result = "False";
}
result;