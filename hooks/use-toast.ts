
import { toast } from 'react-hot-toast';

export const useToast = () => {
  return {
    toast: (options: { title?: string; description?: string; variant?: 'default' | 'destructive' }) => {
      if (options.variant === 'destructive') {
        toast.error(options.description || options.title || 'Erro');
      } else {
        toast.success(options.description || options.title || 'Sucesso');
      }
    }
  };
};
