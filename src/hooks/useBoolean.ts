import { useState } from "react";

export function useBoolean (defaultValue: boolean = false): [boolean, () => void] {
  const [isTruth, setIsTruth] = useState(defaultValue)

  const handleToggle = () => {
    setIsTruth(prevState => !prevState)
  }

  return [isTruth, handleToggle]
}