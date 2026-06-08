import { useState } from "react";

import NotificationContext from "./NotificationContext";

export default function NotificationProvider({
  children,
}) {
  const [notification, setNotification] =
    useState(null);

  /**
   * Exibe uma notificação temporária.
   *
   * Tipos:
   * success
   * warning
   * error
   */
  function showNotification(
    message,
    type = "success"
  ) {
    setNotification({
      message,
      type,
    });

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  }

  return (
    <NotificationContext.Provider
      value={{ showNotification }}
    >
      {children}

      {notification && (
        <div className="toast-overlay">

          <div
            className={`toast ${notification.type}`}
          >
            {notification.message}
          </div>

        </div>
      )}

    </NotificationContext.Provider>
  );
}