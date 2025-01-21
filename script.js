// DECLARATION des variables de DEBUT  du rendez vous et FIN de journée

let startAppointmentHour = 15;
let startAppointmentMinute = 45;

let endOfDayHour = 16;
let endOfDayMinute = 30;

// Boucle for pour tester plusieurs valeurs à la fois, la variable duration represente la durée en minute du RDV

for (let duration = 0; duration <= 100; duration = duration + 1){

// DECLARATION des variables de fin du RDV
    let endAppointmentHour = startAppointmentHour;
    let endAppointmentMinute = startAppointmentMinute + duration;

 // Je cherche à savoir la durée maximale possible pour un RDV, pour cela, je convertis en minutes les horaires de début et de fin de journée puis, je soustrait le nombre de totale de minutes de l'horaire de fin à journée à celui de début de journée

    let maxDuration = (endOfDayHour * 60 + endOfDayMinute) - (startAppointmentHour * 60 + startAppointmentMinute);
    
// La variable si dessous va venir comparer si la durée choisit et égale ou inférieur à la durée maximale possible, pour savoir si le rendez vous et possible ou non
    let rdvOk = (duration <= maxDuration);

// Maintenant je vais venir convertir la durée du RDV au format 24h00
    let correctFormatDuration = duration;
    if (correctFormatDuration >= 60){
        let durationHours = 0;  
        let durationMinute = correctFormatDuration;
        while (durationMinute >= 60){
            durationMinute = durationMinute - 60;
            durationHours = durationHours + 1;
            if (durationHours < 10 && durationMinute < 10){
                correctFormatDuration = "0" + durationHours + "h0" + durationMinute + "min";
            } else if (durationHours < 10){
                correctFormatDuration = "0" + durationHours + "h" + durationMinute + "min";
            } else if (durationMinute < 10){
                correctFormatDuration = durationHours + "h0" + durationMinute + "min";
            } else {
                correctFormatDuration = durationHours + "h" + durationMinute + "min";
            }
        } 
        
    } else {
        correctFormatDuration = duration + "min";
    }

// Pour gérer le cas ou le RDV se termine après 24h
    while( endAppointmentMinute >= 60){
        endAppointmentMinute = endAppointmentMinute - 60;
        endAppointmentHour = endAppointmentHour + 1;
        while(endAppointmentHour >= 24){
            endAppointmentHour = endAppointmentHour - 24;
        }
    };
    
    // Affichage de l'heure de fin du RDV'
    if (endAppointmentHour < 10 && endAppointmentMinute < 10){
        if(rdvOk){
            console.log(correctFormatDuration + ' , RDV Ok, le RDV se terminera à : 0' + endAppointmentHour + "h0" + endAppointmentMinute);
        } else{
            console.log(correctFormatDuration + ' , RDV Impossible, le RDV se terminera à : 0' + endAppointmentHour + "h0" + endAppointmentMinute);
        }    
    } else if (endAppointmentHour < 10){
        if(rdvOk){
            console.log(correctFormatDuration + ' , RDV Ok, le RDV se terminera à : 0' + endAppointmentHour + "h" + endAppointmentMinute);
        } else {
            console.log(correctFormatDuration + ' , RDV Impossible, le RDV se terminera à : 0' + endAppointmentHour + "h" + endAppointmentMinute);
        }
    } else if (endAppointmentMinute < 10){
        if (rdvOk){
            console.log(correctFormatDuration + ' , RDV Ok, le RDV se terminera à : ' + endAppointmentHour + "h0" + endAppointmentMinute);
        } else {
            console.log(correctFormatDuration + ' , RDV Impossible, le RDV se terminera à : ' + endAppointmentHour + "h0" + endAppointmentMinute);
        }
    } else {
        if (rdvOk){
            console.log(correctFormatDuration + ' , RDV Ok, le RDV se terminera à : ' + endAppointmentHour + "h" + endAppointmentMinute);
        } else{
            console.log(correctFormatDuration + ' , RDV Impossible, le RDV se terminera à : ' + endAppointmentHour + "h" + endAppointmentMinute);
        }
    }
    
}