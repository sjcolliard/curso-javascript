alert("¿Querés saber cuál es tu nivel de inglés? Sólo te tomará unos minutos...");

let respuesta = prompt("Escribí 'y' si querés conocer qué tanto sabés del idioma o 'n', si no querés saber");

while (respuesta != "y" && respuesta != "n") {
    alert(respuesta + " no es una respuesta válida");
    respuesta = prompt("Escribí 'y' si querés avanzar, sino poné 'n'");
}

if (respuesta == "y") {
    alert("¡Genial! Solo tendrás que responder tres preguntas. ¡Empecemos!");

    let solucionUno = prompt("1) Present simple: 'My sister ... (not) play tennis'. Escribe a continuación tu respuesta: ");
    if (solucionUno == "does not" || solucionUno == "doesn't") {
        alert("¡Muy Bien! Solo te quedan dos preguntas");

        let solucionDos = prompt("2) Present perfect: '... (you/see) John?'. Escribe a continuación tu respuesta: ");
        if (solucionDos == "have you seen" || solucionDos == "Have you seen" || solucionDos == "HAVE YOU SEEN") {
            alert("¡Excelente! Vamos que solo queda una última pregunta");

            let solucionTres = prompt("2) Present perfect: 'He ... (be) happier if he had stayed home'. Escribe a continuación tu respuesta: ");
            if (solucionTres == "would have been") {
                alert("¡Felicitaciones! Tu nivel es alto");


            } else {
                alert("Tu nivel es medio alto. ¡Felicitaciones y seguí estudiando!")
            }

        } else {
            alert("Tu nivel es medio. Avanzaste bastante, pero aún hay mucho camino por recorrer...")
        }

    } else {
        alert("Tu nivel es bajo. ¡Pero no te desanimes! Repasá los apuntes y volvé a intentarlo");
    }
} else if (respuesta == "n") {
    alert("Gracias por visitar la página");
}