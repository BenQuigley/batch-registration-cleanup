var lensScore = parseInt(bSttrLhumScore);
var lensSection = new String(); 
switch (lensScore)
{
    case '':
        break;
    case 0:
        break;
    case 1:
        lensSection = 'LHUM-100-1A';
        break;
    case 2:
        lensSection = 'LHUM-100-1B';
        break;
    case 3:
        lensSection = 'LHUM-100-2A';
        break;
    case 4:
        lensSection = 'LHUM-100-2B';
        break;
    case 5:
        lensSection = 'LHUM-100-3A';
        break;
    case 6:
        lensSection = 'LHUM-100-3B';
        break;
    case 7:
        lensSection = 'LHUM-100-9A';
        break;
}
if (lensSection != '')
{
    if (coursenumberandsectionactive.join().search(lensSection)>-1) 
    {
        "<div style='color:navy'>"+lensSection+": done."
    } 
    else 
    {
        "<div style='color:#990000'>"+lensSection+": needed."
    }
}
else
{
    "<div style='color:navy'> None assigned."
}
