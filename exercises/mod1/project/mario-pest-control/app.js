function sumValues() {
    var num1, num1, res;
        num1=Number(document.formCal.txtnum1.value);
        num2=Number(document.formCal.txtnum2.value);
        res1=num1-num2;
    document.formCal.txtres1.value=res1;
        num3=Number(document.formCal.txtnum3.value);
        num4=Number(document.formCal.txtnum4.value);
        res2=num3-num4;
    document.formCal.txtres2.value=res2;
        num5=Number(document.formCal.txtnum5.value);
        num6=Number(document.formCal.txtnum6.value);
        res3=num5-num6;
    document.formCal.txtres3.value=res3;
    document.formCal.txtres.value=res1+res2+res3;
}