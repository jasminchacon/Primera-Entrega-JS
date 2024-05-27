let usuario = prompt('Ingrese su nombre');
mostrar_mensaje_inicial(usuario);
calcular_descuento(usuario);
function calcular_descuento(usuario) {
    let calcular_descuento = true;
    while (calcular_descuento) {
        let acumulador = 0;
        let cantidad_prod = 3;
        for (let i = 1; i <= cantidad_prod; i++) {
            let precio_prod = Number(prompt('Ingrese el valor del producto ' + i));
            acumulador += precio_prod;
        }
        let precio_final = acumulador * 0.25;
        alert(usuario + ', el costo total es: ' + precio_final);
        let seguir_calculo = prompt('¿Quiere calculando otros descuentos? (Si/No)').toLowerCase();
        calcular_descuento = (seguir_calculo === 'si' || seguir_calculo === 'sí');
    }
    mostrar_mensaje_despedida(usuario);
}
function mostrar_mensaje_inicial(usuario) {
    alert('El calculo del descuentos se realizara en base a un 25%');
}
function mostrar_mensaje_despedida(usuario) {
    alert(usuario + ', Hasta pronto!');
}
