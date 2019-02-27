# JavaScript #

***¿Qué es?***

Es un lenguaje de programación **interpretado**, mayormente ocupado del lado del cliente, aunque tambien tiene aplicación del lado del servidor.

***¿Por qué JavaScript?***

Es el *lenguaje de la web*, la mayoría de los sitios web modernos utilizan JavaScript. Es versátil al poderse usar en el Frontend, Backend, Internet of Things, VR, Machine learning, etc. Los estándares de JavaScript (ECMA) van incorporando nuevas y mejores maneras de programar.

Para conectar JavaScript con HTML usamos la etiqueta `script`:

```html
<script src="myscripts.js"></script>
```

### Variables ###

Están formadas por un espacio en memoria y un nombre que está asociado a ese espacio. Las variables **locales** se definen con la palabra reservada `let`.
Las variables **globales** se definen con la palabra reservada `var`.
Las variables **constantes** se definen con la palabra reservada `const`.

```javascript
let edad = 28;
var nombre = "Juan";
const MAYORIA_DE_EDAD = 18;
```

Las variables pueden contener valores `string`, `number`, `boolean`, `array`, `undefined`, `function`, entre otros.

### Inputs & Outputs ###

También conocido como I/O, es la comunicación entre un sistema que procesa información, como una computadora, y el mundo exterior, posiblemente un humano u otro sistema de procesamiento de información. Las entradas (inputs) es la data que recibe el sistema y las salidas (outputs) es la data que sale de éste.

`prompt()` es un ejemplo de **input**. Cuando se ejecuta se muestra un cuadro de diálogo donde el usuario puede escribir una línea de texto.

`console.log()` es un ejemplo de **output**. Imprime lo que se le pase entre paréntesis en algún dispositivo de salida de texto. En los navegadores la salida queda en la consola de JavaScript.

### Operadores Aritméticos ###

Los operadores Aritméticos toman valores numéricos (ya sean literales o variables) como sus operandos y retornan un valor numérico único. Los operadores aritméticos estándar son adición o suma (+), sustracción o resta (-), multiplicación (*), y división (/).

```javascript
// Suma
console.log( 2 + 3); // Output: 5

// Resta
console.log( 10 - 2); // Output: 8

// Multiplicación
console.log( 3 * 5); // Output: 15

// División 
console.log( 8 / 4); // Output: 2
```
# Estructuras de Control #

Permiten tomar decisiones y realizar un proceso repetidas veces. 
Se trata de estructuras muy importantes, ya que son las encargadas de controlar el flujo de un programa, según los requerimientos del mismo

![alt text](https://www.fing.edu.uy/inco/cursos/fpr/wiki/images/3/39/Flujoifthenelse.png)

**Condicional IF - ELSE**

Ejecutar sentencias en línea recta no es la única opción que tenemos. Una alternativa es la ejecución condicional, en donde escogemos entre dos rutas diferentes basados en un valor Booleano.

```javascript
var num = Number(prompt("Dame un número", "0"));

if (num < 10)
  alert("Chico");
else if (num < 100)
  alert("Mediano");
else
  alert("Grande");
```

### Operadores Relacionales ###

Cada uno de estos operadores llamará a la función `valueOf()` en cada operando antes de realizar una comparación.

```javascript
// Operador mayor que (>)
console.log( 4 > 3 ); // Output: true

// Operador mayor o igual (>=)
console.log( 4 >= 3 ); // Output: true
console.log( 3 >= 3 ); // Output: true

// Operador menor que (<)
console.log( 3 < 4 ); // Output: true

// Operador menor o igual (<=)
console.log( 3 <= 4 ); // Output: true
```

### Operadores de Comparación ###

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operadores pueden ser númericos, de cadena de caracteres (Strings), lógicos o de objetos. 

```javascript
// Operador de igualdad (==)
console.log( 3 == "3" ); // Output: true

// Operador de desigualdad (!=)
console.log( 4 != "3" ); // Output: true

// Estrictamente iguales (===)
console.log( 3 === 3 ); // Output: true

// Estrictamente desiguales (!==)
console.log( 3 !== "3" ); // Output: true
```

### Operadores Lógicos ###

Tipicamente usados con valores boleanos (lógicos) y, cuando es así, estos operadores retornan igualmente un valor boleano.

```javascript
// AND lógico (&&)
console.log( 5 > 4 && 3 > 2); // Output: true

// OR lógico (||)
console.log( 5 > 4 || 3 > 4); // Output: true
```




***Quiero saber mas...***
http://hectorip.github.io/Eloquent-JavaScript-ES-online/
https://javascript.info/types
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Aritm%C3%A9ticos
https://www.w3schools.com/js/js_type_conversion.asp

***Quiero saber mas(IF)***
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://www.w3schools.com/js/js_if_else.asp
