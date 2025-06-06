const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const parts = [];
  if (hours > 0) parts.push(`${hours} h`);
  if (mins > 0 || hours === 0) parts.push(`${mins} min`);

  return parts.join(" ");
};

export default formatMinutes;
