// Recolher o menu de rolagem 
window.addEventListener('scroll', () => {
    let menuCheck = document.getElementById('check')
    // se a caixa check estiver selecinada 
    if (menuCheck.checked) {
        menuCheck.checked = false
    }
})

//  () => função