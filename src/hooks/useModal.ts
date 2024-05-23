import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return { show, toggleModal };
};
