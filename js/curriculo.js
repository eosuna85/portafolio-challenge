document.addEventListener('DOMContentLoaded', () => {
    const verCurriculo = document.getElementById('curriculo');

    verCurriculo.addEventListener('click', () => {
        let rutaPDF = "/portafolio-challenge/pdf/CV_Profile.pdf";
        window.open(rutaPDF, "_blank");
    });
});