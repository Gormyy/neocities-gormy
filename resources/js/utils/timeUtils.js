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

function formatDateCustom(isoString) {
  const date = new Date(isoString); // Parses to local time
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-based
  const day = String(date.getDate()).padStart(2, '0');

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // convert 0 to 12
  const formattedHours = String(hours).padStart(2, '0');

  return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
}

window.formatDateCustom = formatDateCustom

window.yearsSince = yearsSince