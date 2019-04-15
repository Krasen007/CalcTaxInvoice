//made by Krasen

var danakDDS = 1.2;
var plosakDanak = 0.9;

function calcTax() {

    var cenaZaFaktura = prompt("Цена за фактуриране", 0);
    cenaZaFaktura = parseFloat(cenaZaFaktura);    

    var cenaNaStokata = prompt("Цена на стоката", 0);
    cenaNaStokata = parseFloat(cenaNaStokata);

    var sabiraemo = cenaNaStokata - cenaZaFaktura;

    var rezultat = (((sabiraemo / danakDDS) * plosakDanak + ( - sabiraemo)) + cenaNaStokata);
    var danyci = (((((sabiraemo / danakDDS) * plosakDanak) + ( - sabiraemo)) + cenaNaStokata) - cenaNaStokata);

    var pechalba = cenaZaFaktura - rezultat;

    //разбивка на смятането.
    console.log("Цена на стоката - Цена за Фактуриране = n");
    console.log("((n / 1.2) * 0.9) + (n) + Цената на стоката");
    console.log("\n");
    console.log("\n");

    console.log("Цена на стоката - Цена за Фактуриране");
    console.log(cenaNaStokata, " - " ,cenaZaFaktura, " = ");

    console.log("n = ",sabiraemo);

    console.log("/ 1.2");
    console.log((sabiraemo / 1.2));

    console.log("* 0.9");
    console.log((sabiraemo / 1.2) * 0.9);

    console.log("+ (n)" );
    console.log((sabiraemo / 1.2) * 0.9 + ( - sabiraemo));

    console.log("+ Цена на стоката" );
    console.log(((sabiraemo / 1.2) * 0.9 + ( - sabiraemo)) + cenaNaStokata);

    console.log("\n"); 	

    console.log("Данъци");
    console.log(((((sabiraemo / 1.2) * 0.9) + ( - sabiraemo)) + cenaNaStokata) - cenaNaStokata);
    //край на разбивката

    return ["Цена на стоката: <b>" + cenaNaStokata + " лв. </b>" 
    + "<p>  За фактуриране: <b>" + cenaZaFaktura + " лв.  </b>"
    + "<hr>" 
    + "<p>  За плащане: <b>" + rezultat + " лв. </b>" 
    + "<hr>" 
    + "<p> Данъци: <b>" + danyci + " лв. </b>" 
    + "<p> Печалба: <b>" + pechalba + " лв. </b>"];

}
