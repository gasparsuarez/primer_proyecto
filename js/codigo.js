//Variables 
const kilosCarne = document.querySelector('#kilos-carne');
const ingredientes0 = document.querySelector('#ingredientes0');
const ingredientes1 = document.querySelector('#ingredientes1');
const tipo = document.querySelector('.form-select');
const btnGenerar = document.querySelector('#btnGenerar');
const btnBorrar = document.querySelector('#btnBorrar');
const kgFinales = document.querySelector('#kgfinales');

const datosBusqueda = [];

cargarPagina();


btnGenerar.addEventListener('click', mostrarIngredientes);
btnBorrar.addEventListener('click', resetearFormulario);

tipo.addEventListener('blur',  e => {
    datosBusqueda.tipo = e.target.value;
});
kilosCarne.addEventListener('blur', e => {
    datosBusqueda.kilos = e.target.value;
    // validarFormula();
}); 

function resetearFormulario(){
    cargarPagina();
}

function cargarPagina(){
    btnGenerar.classList.add('disabled');
    btnBorrar.classList.add('disabled');
    ingredientes0.classList.remove('border', 'border-secondary', 'p-1');
    ingredientes1.classList.remove('border', 'border-secondary', 'p-1');  
    ingredientes0.textContent = '';
    ingredientes1.textContent = '';
    kgFinales.textContent = '';
}


function mostrarIngredientes(){
    ingredientes0.classList.add('border', 'border-seconday', 'p-1');
    ingredientes1.classList.add('border', 'border-seconday', 'p-1');
    if(datosBusqueda.tipo == 'pollo' && datosBusqueda.kilos > 0){
        let sal = 0.600/30*datosBusqueda.kilos,
            azucar = 0.100/30*datosBusqueda.kilos,
            pluscolor = 0.100/30*datosBusqueda.kilos,
            rendiplus = 0.120/30*datosBusqueda.kilos,
            pimienta = 0.30/30*datosBusqueda.kilos,
            fecula = 0.800/30*datosBusqueda.kilos,
            ajo = 0.20/30*datosBusqueda.kilos,
            rebozador = 5/30*datosBusqueda.kilos,
            oregano = 0.25/30*datosBusqueda.kilos,
            agua = 2.4/30*datosBusqueda.kilos,
            grasa = 2/30*datosBusqueda.kilos,
            cuero = 8/30*datosBusqueda.kilos
    
    ingredientes0.innerHTML = `Pechuga: ${datosBusqueda.kilos} Kg<br>
                               Grasa Cerdo: ${grasa.toFixed(3)} Kg<br> 
                               Cuero Pollo: ${cuero.toFixed(3)} Kg`
            
    ingredientes1.innerHTML = `Sal: ${sal.toFixed(3)}<br>
                              Azucar: ${azucar.toFixed(3)}<br>
                              Pluscolor: ${pluscolor.toFixed(3)}<br>
                              Rendiplus: ${rendiplus.toFixed(3)}<br>
                              Pimienta: ${pimienta.toFixed(3)}<br>
                              Fecula: ${fecula.toFixed(3)}<br>
                              Ajo: ${ajo.toFixed(3)}<br>
                              Pan Rallado: ${rebozador.toFixed(3)}<br>
                              Oregano: ${oregano.toFixed(3)}<br>
                              Agua: ${agua.toFixed(3)}`;
    };
    if(datosBusqueda.tipo == 'cerdo' && datosBusqueda.kilos > 0){
        let sal = 1.170/70*datosBusqueda.kilos,
            azucar = 0.190/70*datosBusqueda.kilos,
            pluscolor = 0.140/70*datosBusqueda.kilos,
            rendiplus = 0.230/70*datosBusqueda.kilos,
            pimienta = 0.70/70*datosBusqueda.kilos,
            fecula = 1.560/70*datosBusqueda.kilos,
            ajo = 0.70/70*datosBusqueda.kilos,
            rebozador = 4.860/70*datosBusqueda.kilos,
            agua = 5.8/70*datosBusqueda.kilos,
            saborJamon = 0.105/70*datosBusqueda.kilos,
            soja = 1.940/70*datosBusqueda.kilos,
            aguaSoja = 5.8/1.940*soja
    
    ingredientes0.innerHTML = `Cerdo: ${datosBusqueda.kilos} Kg<br>
                               Soja: ${soja.toFixed(3)} Kg<br> `         
    ingredientes1.innerHTML = `Sal: ${sal.toFixed(3)}<br>
                              Azucar: ${azucar.toFixed(3)}<br>
                              Pluscolor: ${pluscolor.toFixed(3)}<br>
                              Rendiplus: ${rendiplus.toFixed(3)}<br>
                              Pimienta: ${pimienta.toFixed(3)}<br>
                              Fecula: ${fecula.toFixed(3)}<br>
                              Ajo: ${ajo.toFixed(3)}<br>
                              Rebozador: ${rebozador.toFixed(3)}<br>
                              Saborizante Jamon: ${saborJamon.toFixed(3)}<br>
                              Agua: ${agua.toFixed(3)}<br>
                              Agua para Soja: ${aguaSoja.toFixed(3)}`;

    let resultado = parseFloat(datosBusqueda.kilos)
                    + parseFloat(soja)
                    + parseFloat(sal)
                    + parseFloat(pluscolor)
                    + parseFloat(rendiplus)
                    + parseFloat(pimienta)
                    + parseFloat(fecula)
                    + parseFloat(ajo)
                    + parseFloat(rebozador)
                    + parseFloat(saborJamon)
                    + parseFloat(agua)
                    + parseFloat(aguaSoja);
    
    kgFinales.innerHTML = `Total de KG finales: <font color="orange">${resultado.toFixed(2)}</font>`;
    };
};





