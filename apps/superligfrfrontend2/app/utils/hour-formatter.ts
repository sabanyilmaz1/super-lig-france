export const formatHourAndAddOne = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  // Add one hour
  date.setHours(date.getHours());

  // Format to HH:MM
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};
