## Mini-Proyecto - Calculadora - 2024

> [!NOTE]
> _El codigo esta todo comentado de explicaciones (solo script.js)._

> **_Primer practica en JavaScript_**

#### --- Cosas que me faltan para la calculadora ---

* [x] Chequear que los operadores no se **repitan seguidamente** en la operacion. 
* [x] Permitir **numeros negativos**. Ej => -10+1.
* [x] Que las cuentas despues de clickear el **'='** sigan si el usuario desea.
* [x] Permitir **numeros flotantes** en las operaciones.
* [x] Hacer el diseño estetico de la pagina.
* [x] Que se puedan escribir las operaciones con el teclado.
* [x] Añadir el operador resto (%).
___

#### --- Errores que siento que cometí en el proyecto ---

* Al principio me costo buscar la forma de hacer las operaciones, pero siento que ahora con la solucion que le encontre no puedo por ejemplo hacer los () de la calculadora. Los parentesis lo que tiene es que se hacen primero las operaciones que estan entre () y despues las otras.

*  **SOLUCIONADO** - Al no acordarme conceptos y buenas practicas del HTML, recien di cuenta de que los id son unicos y las clases no. Y bueno, agrupe a los botones con ids (numero,operador). Lo pongo aca como error pero creo que puedo solucionarlo facilmente.

* Tengo un error que no se me ocurre como solucionarlo. El boton '.' se puede poner varias veces en un numero, ej => 10 + 1.5.7.5... Lo bueno de esto es que el resultado no me da mal, solo toma hasta el primer punto es decir => 10 + 1.5, asi que lo voy a dejar asi. Pero bueno no encontre una forma de solucionarlo.

___

### --- Commits --- 

> Del actual al antiguo

| **'resto, evento teclado y ajustes'** - Fecha 2/02 |

* Añadi la operacion resto, ya es funcional.
* Ahora el usuario puede escribir las operaciones con el teclado.
* Solucione uno de los puntos del apartado de errores, era facil.
* Añadi otro error que me acorde de antes.

| **'diseño,errores y cosas que faltan'** - Fecha 1/02 |

* Diseñe la calculadora en styles.css.
* Añadi 2 puntos en el apartado de arriba que me voy dando cuenta que faltan para cerrar con el proyecto. 
* Añadi el apartado de "Errores que siento que cometí".

| **'excepciones del usuario y mejoras'** - Fecha 31/01 |

* Limite al usuario a que escriba bien las operaciones. Ej => 10+*10
* Añadi numeros flotantes, con un fallo pero la cuenta da bien.
* Que siga haciendo operaciones con el resultado de las operaciones.

| **'empezando la calculadora'** - Fecha 30/01 |

* Me quede pensando bastante la logica. Probando diferentes soluciones.
* Lo que mas me costo fue como pensar y hacer el tema de las operaciones con mas de un operador.
___