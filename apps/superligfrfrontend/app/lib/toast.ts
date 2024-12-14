import toast, { ToastOptions } from "react-hot-toast";

export class ToastManager {
  /**
   * Affiche un toast d'information
   * @param message Le message à afficher
   * @param options Options supplémentaires pour personnaliser le toast
   */
  static info(message: string, options?: ToastOptions) {
    toast(message, {
      ...options,
      icon: "ℹ️",
      style: { backgroundColor: "#1E90FF", color: "#fff" },
    });
  }

  /**
   * Affiche un toast de succès
   * @param message Le message à afficher
   * @param options Options supplémentaires pour personnaliser le toast
   */
  static success(message: string, options?: ToastOptions) {
    toast.success(message, { ...options });
  }

  /**
   * Affiche un toast d'erreur
   * @param message Le message à afficher
   * @param options Options supplémentaires pour personnaliser le toast
   */
  static error(message: string, options?: ToastOptions) {
    toast.error(message, { ...options });
  }

  /**
   * Affiche un toast de chargement
   * @param message Le message à afficher
   * @returns Un ID pour mettre à jour ou fermer le toast plus tard
   */
  static loading(message: string) {
    return toast.loading(message);
  }

  /**
   * Met à jour un toast existant
   * @param id L'identifiant du toast à mettre à jour
   * @param message Le nouveau message
   * @param options Options supplémentaires pour personnaliser le toast
   */

  /**
   * Ferme un toast
   * @param id L'identifiant du toast à fermer
   */
  static dismiss(id?: string) {
    toast.dismiss(id);
  }
}
