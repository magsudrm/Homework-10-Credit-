function Hesabla(){
    let KreditMeblegi=Number(document.getElementById('inp1').value);
    let KreditAyi =Number(document.getElementById('slc').value);
    let FaizDerecesi=Number(document.getElementById('inp2').value);
    let UmumiMebleg=(KreditMeblegi*FaizDerecesi/100)+KreditMeblegi;
    let AyliqOdenis=UmumiMebleg/KreditAyi;
    document.getElementById('inp3').value=`Ümumi Məbləğ: ${UmumiMebleg}`;
    document.getElementById('inp4').value=`Aylıq Ödəniş Məbləği: ${AyliqOdenis}`;
}