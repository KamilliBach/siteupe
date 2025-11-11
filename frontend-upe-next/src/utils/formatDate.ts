/**
 * Utilitários para formatação de data
 */

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateShort = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
};
