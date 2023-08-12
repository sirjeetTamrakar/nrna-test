import { useFormContext } from 'react-hook-form';

export const HookForm = ({ onSubmit, children }) => {
  const { handleSubmit } = useFormContext();
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};
