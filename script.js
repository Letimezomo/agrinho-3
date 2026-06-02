// Contadores animados
const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {
    const atualizar = () => {
        const alvo = +contador.getAttribute("data-target");
        const valor = +contador.innerText;
        const incremento = alvo / 100;
        if(valor < alvo){
            contador.innerText = Math.ceil(valor + incremento);
            setTimeout(atualizar,20);
        } else {
            contador.innerText = alvo;
        }
    };
    atualizar();
});

// Quiz interativo
function resposta(correta){
    const resultado = document.getElementById("resultado");
    if(correta){
        resultado.innerHTML = "✅ Resposta correta!";
        resultado.style.color = "green";
    }else{
        resultado.innerHTML = "❌ Resposta incorreta!";
        resultado.style.color = "red";
    }
}

// Modo escuro
function toggleDarkMode(){
    document.body.classList.toggle('dark');
}

// Toggle menu responsivo
const nav = document.querySelector('nav ul');
const toggle = document.querySelector('.toggle-dark');
toggle.addEventListener('click', ()=>{
    nav.classList.toggle('active');
});