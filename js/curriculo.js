const verCurriculo = document.getElementById('curriculo');

verCurriculo.addEventListener('click',()=>{
    let rutaPDF = "../pdf/CV_Profile.pdf";
    window.open(rutaPDF, "_blank");
});