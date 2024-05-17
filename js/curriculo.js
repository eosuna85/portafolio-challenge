const verCurriculo = document.getElementById('curriculo');

verCurriculo.addEventListener('click',()=>{
    let rutaPDF = "../pdf/Profile.pdf";
    window.open(rutaPDF, "_blank");
});