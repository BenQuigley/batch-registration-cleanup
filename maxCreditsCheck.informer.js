var credits = parseInt(credtermactive[0]);
var esl = parseInt(scoremichigan);
if (activeprogram.indexOf('BM4') === 0)
{
    var regMax = 16;
    var eslMax = 17;
} 
else if (activeprogram.indexOf('PDM') === 0 || activeprogram.indexOf('TWO') === 0)
{
    var regMax = 13;
    var eslMax = 16;
}
if (esl >= 2 && esl <= 10) 
{
    var maxCredits = new Integer(eslMax);
} 
else if (coursenumberactive.indexOf("XX-552") > -1) 
{
    maxCredits = new Integer(eslMax);
} 
else 
{
    maxCredits = new Integer(regMax);
}
if (credits > maxCredits)
{
    "<div style='color:#990000'>Max credits exceeded ("+credits+" taken; "+maxCredits+" allowed)."
} 
else 
{
    "<div style='color:navy'>Max credits not exceeded ("+credits+" taken; "+maxCredits+" allowed).";
}