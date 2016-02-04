if (activeprogram.search('PDM') == 0)
{
    "<div style='color:navy'>No LHUM needed (PDM student)."
}
else if ( activeprogram.search('TWO') == 0)
{
    "<div style='color:navy'>No LHUM needed (TWO student)."
}
else {
    var lhumScore = bSttrLhumScore;
    var lhumSection = '';
    switch (lhumScore)
    {
        case '':
            lhumSection = "see PSM";
            break;
        case 1:
            lhumSection = 'LHUM-100-1A';
            break;
        case 2:
            lhumSection = 'LHUM-100-1B';
            break;
        case 3:
            lhumSection = 'LHUM-100-1C';
            break;
        case 4:
            lhumSection = 'LHUM-100-1D';
            break;
        case 5:
            lhumSection = 'LHUM-100-1E';
            break;
        case 6:
            lhumSection = 'LHUM-100-1F';
            break;
        case 7:
            lhumSection = 'LHUM-100-1G';
            break;
        case 8:
            lhumSection = 'LHUM-100-1H';
            break;
        case 9:
            lhumSection = 'LHUM-100-1I';
            break;
        case 10:
            lhumSection = 'LHUM-100-2A';
            break;
        case 11:
            lhumSection = 'LHUM-100-2B';
            break;
        case 12:
            lhumSection = 'LHUM-100-2C';
            break;
        case 13:
            lhumSection = 'LHUM-100-2D';
            break;
        case 14:
            lhumSection = 'LHUM-100-2E';
            break;
        case 15:
            lhumSection = 'LHUM-100-2F';
            break;
        case 16:
            lhumSection = 'LHUM-100-2G';
            break;
        case 17:
            lhumSection = 'LHUM-100-2H';
            break;
        case 18:
            lhumSection = 'LHUM-100-2I';
            break;
        case 19:
            lhumSection = 'LHUM-100-3A';
            break;
        case 20:
            lhumSection = 'LHUM-100-3B';
            break;
        case 21:
            lhumSection = 'LHUM-100-3C';
            break;
        case 22:
            lhumSection = 'LHUM-100-3D';
            break;
        case 23:
            lhumSection = 'LHUM-100-3E';
            break;
        case 24:
            lhumSection = 'LHUM-100-3F';
            break;
        case 25:
            lhumSection = 'LHUM-100-3G';
            break;
        case 26:
            lhumSection = 'LHUM-100-3H';
            break;
        case 27:
            lhumSection = 'LHUM-100-3I';
            break;
        case 28:
            lhumSection = 'LHUM-100-4A';
            break;
        case 29:
            lhumSection = 'LHUM-100-4B';
            break;
        case 30:
            lhumSection = 'LHUM-100-4C';
            break;
        case 31:
            lhumSection = 'LHUM-100-4D';
            break;
        case 32:
            lhumSection = 'LHUM-100-4E';
            break;
        case 33:
            lhumSection = 'LHUM-100-4F';
            break;
        case 34:
            lhumSection = 'LHUM-100-4G';
            break;
        case 35:
            lhumSection = 'LHUM-100-4H';
            break;
        case 36:
            lhumSection = 'LHUM-100-4I';
            break;
        case 37:
            lhumSection = 'LHUM-100-5A';
            break;
        case 38:
            lhumSection = 'LHUM-100-5B';
            break;
        case 39:
            lhumSection = 'LHUM-100-5C';
            break;
        case 40:
            lhumSection = 'LHUM-100-5D';
            break;
        case 41:
            lhumSection = 'LHUM-100-5E';
            break;
        case 42:
            lhumSection = 'LHUM-100-5F';
            break;
        case 43:
            lhumSection = 'LHUM-100-5G';
            break;
        case 44:
            lhumSection = 'LHUM-100-5H';
            break;
        case 45:
            lhumSection = 'LHUM-100-6A';
            break;
        case 46:
            lhumSection = 'LHUM-100-6B';
            break;
        case 47:
            lhumSection = 'LHUM-100-6C';
            break;
        case 48:
            lhumSection = 'LHUM-100-6D';
            break;
        case 49:
            lhumSection = 'LHUM-100-6E';
            break;
        case 50:
            lhumSection = 'LHUM-100-6F';
            break;
        case 51:
            lhumSection = 'LHUM-100-6G';
            break;
        case 52:
            lhumSection = 'LHUM-100-6H';
            break;
        case 53:
            lhumSection = 'LHUM-100-9A';
            break;
        case 54:
            lhumSection = 'LHUM-100-9B';
            break;
    }
    if (coursenumberactive.join().search(lhumSection)>-1) 
    {
        "<div style='color:navy'>"+lhumSection+": done."
    } 
    else 
    {
        "<div style='color:#990000'>"+lhumSection+": needed."
    }
}