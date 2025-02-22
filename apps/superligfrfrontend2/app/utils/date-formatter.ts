const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const days = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

/**
 * Convertit un timestamp en date française formatée (ex: "Lundi 20 février 2024")
 * @param timestamp - Le timestamp en secondes à convertir
 * @returns La date formatée en français
 */
export const formatTimestampToFrenchDate = (
  timestamp: string | number
): string => {
  // Convertir le timestamp en millisecondes
  const timestampInMs =
    typeof timestamp === "string"
      ? parseInt(timestamp) * 1000
      : timestamp * 1000;

  const date = new Date(timestampInMs);
  const dayName = days[date.getDay()];
  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${capitalizedDayName} ${day} ${month} ${year}`;
};

export const formatTimestampToTime = (timestamp: string | number): string => {
  const timestampInMs =
    typeof timestamp === "string"
      ? parseInt(timestamp) * 1000
      : timestamp * 1000;
  const date = new Date(timestampInMs);
  return date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
