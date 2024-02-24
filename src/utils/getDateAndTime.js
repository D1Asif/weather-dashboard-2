function getDateAndTime(value, inMS) {
    if (!inMS) {
        value = value * 1000;
    }

    const date = new Date(value);

    const optionsTime = {
        hour: 'numeric', // Numeric hour (e.g., "1")
        minute: '2-digit', // Two-digit minute (e.g., "04")
        hour12: true // Use 12-hour format with AM/PM
    }

    const optionsDate = {
        weekday: 'long', // Full day name (e.g., "Wednesday")
        day: 'numeric', // Numeric day (e.g., "12")
        month: 'short', // Abbreviated month name (e.g., "Jan")
        year: 'numeric' // Two-digit year (e.g., "'24")
    }

    const timeString = date.toLocaleTimeString('en-us', optionsTime);
    const dateString = date.toLocaleDateString('en-us', optionsDate);

    return `${timeString} - ${dateString}`
}

export default getDateAndTime;