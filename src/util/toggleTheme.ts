"use server";

import { cookies } from "next/headers";

const toggleTheme = async () => {
  const theme = (await cookies()).get("theme")?.value || "light";
  (await cookies()).set("theme", theme === "light" ? "dark" : "light");
  return;
};

export default toggleTheme;
