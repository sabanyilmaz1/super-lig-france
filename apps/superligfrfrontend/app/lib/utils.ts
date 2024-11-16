import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHoursFromTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (hours < 10) {
    return `0${hours}:${minutes}`;
  }
  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export function getFrenchDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const dateString = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.slice(0, maxLength - 1) + "..." : text;
}

export function decodeUtf8(text: string) {
  // try {
  //   let decoder = new TextDecoder("utf-8");
  //   let bytes = new Uint8Array(
  //     text.split("").map((char) => char.charCodeAt(0))
  //   );
  //   return decoder.decode(bytes);
  // } catch (e) {
  //   console.error("Erreur de décodage :", e);
  //   return text;
  // }
  return text;
}
