export const formatTimestamp = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};