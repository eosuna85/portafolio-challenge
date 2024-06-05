const verCurriculo = document.getElementById('curriculo');

verCurriculo.addEventListener('click',()=>{
    let rutaPDF = "../pdf/profile.pdf";
    window.open(rutaPDF, "_blank");
});