/* Build in libraries */
import React from 'react';

/* Third party libraries */
import { FormProvider, useForm } from 'react-hook-form';

export const HookFormProvider = ({ children, defaultValues, resolver }) => {
  const methods = useForm({ defaultValues: defaultValues, resolver });
  return <FormProvider {...methods}>{children}</FormProvider>;
};
