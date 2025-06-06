import React, { createContext, useContext, useEffect, useState } from "react";
import { createGuestSession } from "../api/movies";

type SessionContextType = {
  guestSessionId: string;
  loading: boolean;
};

const SessionContext = createContext<SessionContextType>({
  guestSessionId: "",
  loading: true,
});

export const SessionProvider = ({ children }: any) => {
  const [guestSessionId, setGuestSessionId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const id = await createGuestSession();
        setGuestSessionId(id);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return (
    <SessionContext.Provider value={{ guestSessionId, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
