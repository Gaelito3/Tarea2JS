// Ejercicio 6: Suma de números positivos en un arreglo
const sumaPositivos = (numeros) => {
    return numeros.reduce((suma, numero) => {
        return numero > 0 ? suma + numero : suma;
    }, 0);
};

// Ejercicio 7: Devolver menor y mayor número
const menorYMayor = (arreglo) => {
    if (arreglo.length === 0) return [];
    
    const menor = Math.min(...arreglo);
    const mayor = Math.max(...arreglo);
    
    return [menor, mayor];
};

// Ejercicio 8: Arreglo en orden inverso
const invertirArreglo = (arreglo) => {
    return [...arreglo].reverse();
};

// Ejercicio 9: Contar múltiplos de un número
const contarMultiplos = (arreglo, divisor) => {
    return arreglo.filter(numero => numero % divisor === 0).length;
};

// Ejercicio 10: Pares elevados al cuadrado
const paresAlCuadrado = (numeros) => {
    return numeros
        .filter(numero => numero % 2 === 0)
        .map(numero => numero * numero);
};

// Ejercicio 11: Contar valores únicos
const contarUnicos = (arreglo) => {
    const unicos = new Set(arreglo);
    return unicos.size;
};

// Ejercicio 12: Unión, intersección y diferencia de arreglos heterogéneos
const operacionesConjuntos = (arr1, arr2) => {
    const conjunto1 = new Set(arr1);
    const conjunto2 = new Set(arr2);
    
    // Unión
    const union = [...new Set([...arr1, ...arr2])];
    
    // Intersección
    const interseccion = [...arr1].filter(elemento => conjunto2.has(elemento));
    
    // Diferencia (elementos en arr1 pero no en arr2)
    const diferencia = [...arr1].filter(elemento => !conjunto2.has(elemento));
    
    return {
        union,
        interseccion,
        diferencia
    };
};

// Ejercicio 13: Elementos que aparecen exactamente una vez
const soloUnaVez = (arr) => {
    const frecuencia = {};
    
    // Contar frecuencia de cada elemento
    arr.forEach(elemento => {
        frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
    });
    
    // Filtrar elementos que aparecen exactamente una vez
    return arr.filter(elemento => frecuencia[elemento] === 1);
};

// Ejercicio 14: Diferencia simétrica
const diferenciaSimetrica = (a, b) => {
    const conjuntoA = new Set(a);
    const conjuntoB = new Set(b);
    
    // Elementos en A pero no en B
    const soloEnA = [...a].filter(x => !conjuntoB.has(x));
    
    // Elementos en B pero no en A
    const soloEnB = [...b].filter(x => !conjuntoA.has(x));
    
    return [...soloEnA, ...soloEnB];
};

// Ejercicio 15: Detector de subconjunto
const esSubconjunto = (a, b) => {
    const conjuntoB = new Set(b);
    return a.every(elemento => conjuntoB.has(elemento));
};

// Pruebas de los ejercicios 6-15
console.log("\n=== EJERCICIOS 6-15 ===");

const numerosEjemplo = [1, -2, 3, -4, 5, 0, -6, 7];
console.log("6. Suma de positivos:", sumaPositivos(numerosEjemplo));

console.log("7. Menor y mayor:", menorYMayor(numerosEjemplo));
console.log("7. Menor y mayor vacío:", menorYMayor([]));

console.log("8. Arreglo invertido:", invertirArreglo([1, 2, 3, 4, 5]));

console.log("9. Múltiplos de 2:", contarMultiplos([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log("9. Múltiplos de 3:", contarMultiplos([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log("10. Pares al cuadrado:", paresAlCuadrado([1, 2, 3, 4, 5, 6]));

console.log("11. Valores únicos:", contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]));
console.log("11. Valores únicos strings:", contarUnicos(["a", "b", "a", "c", "b"]));

const arr1 = [1, 2, 3, "a", "b"];
const arr2 = [2, 3, 4, "b", "c"];
console.log("12. Operaciones con conjuntos:");
const resultado12 = operacionesConjuntos(arr1, arr2);
console.log("   Unión:", resultado12.union);
console.log("   Intersección:", resultado12.interseccion);
console.log("   Diferencia:", resultado12.diferencia);

console.log("13. Solo una vez:", soloUnaVez([1, 2, 2, 3, 4, 4, 5, 6, 6]));
console.log("13. Solo una vez strings:", soloUnaVez(["a", "b", "a", "c", "d", "b"]));

console.log("14. Diferencia simétrica:", diferenciaSimetrica([1, 2, 3, 4], [3, 4, 5, 6]));

console.log("15. Es subconjunto [1,2] ⊆ [1,2,3,4]:", esSubconjunto([1, 2], [1, 2, 3, 4]));
console.log("15. Es subconjunto [1,5] ⊆ [1,2,3,4]:", esSubconjunto([1, 5], [1, 2, 3, 4]));