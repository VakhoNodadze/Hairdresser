export const variants = ['default', 'compact', 'contained', 'outlined', 'basic', 'error', 'success', 'warning'] as const;
export type variantType = typeof variants[number];