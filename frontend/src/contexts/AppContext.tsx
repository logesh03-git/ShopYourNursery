import React, { useContext, useState } from "react";
import Toast from "../components/Modals/Toast";
import useValidateAuth from "../hooks/useValidateAuth";

type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};
type Props = {
  children: React.ReactNode;
};
const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: Props) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
  useValidateAuth();
  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => setToast(toastMessage),
      }}
    >
      {toast && (
        <Toast
          message={toast?.message}
          type={toast?.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
