function yearsSince(date) { //gets how many years it has been since a date
    const currentDate = new Date();
    const targetDate = new Date(date);

    let yearsPassed = currentDate.getFullYear() - targetDate.getFullYear();

    if (
        currentDate.getMonth() < targetDate.getMonth() ||
        (currentDate.getMonth() === targetDate.getMonth() && currentDate.getDate() < targetDate.getDate())
    ) {
        yearsPassed--;
    }

    return yearsPassed;
}

window.yearsSince = yearsSince