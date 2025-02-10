function validateAppointment(startHour, startMinute, endHour, endMinute, duration) {
    
    const startTimeInMinutes = convertToMinutes(startHour, startMinute);
    const endTimeInMinutes = convertToMinutes(endHour, endMinute);
    const maxPossibleDuration = endTimeInMinutes - startTimeInMinutes;
    const isAppointmentPossible = duration <= maxPossibleDuration;
    const appointmentEndTime = convertToTimeFormat(startTimeInMinutes + duration);

    return isAppointmentPossible 
        ? `Appointment possible, it will end at ${appointmentEndTime}`
        : `Appointment impossible, it would end at ${appointmentEndTime}`;
}

function convertToMinutes(hours, minutes) {
    return hours * 60 + minutes;
}

function convertToTimeFormat(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;

    return `${String(hours).padStart(2, "0")}h${String(minutes).padStart(2, "0")}`;
}