export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

export function getCurrentDateLong(): string {
  const date = new Date();
  const estDate = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const month = estDate.toLocaleString("en-US", { month: "long" });
  const day = estDate.getDate();
  const year = estDate.getFullYear();

  return `${month} ${day}, ${year}`;
}
