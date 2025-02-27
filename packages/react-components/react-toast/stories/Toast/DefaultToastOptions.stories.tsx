import * as React from 'react';
import { Toaster, useToastController, ToastTitle, Toast } from '@fluentui/react-toast';
import { useId, Button } from '@fluentui/react-components';

export const DefaultToastOptions = () => {
  const toasterId = useId('toaster');
  const { dispatchToast } = useToastController(toasterId);
  const notify = () =>
    dispatchToast(
      <Toast>
        <ToastTitle intent="info">Options configured in Toaster</ToastTitle>
      </Toast>,
    );

  return (
    <>
      <Toaster toasterId={toasterId} position="top-end" pauseOnHover pauseOnWindowBlur timeout={1000} />
      <Button onClick={notify}>Make toast</Button>
    </>
  );
};

DefaultToastOptions.parameters = {
  docs: {
    description: {
      story: [
        'Default options for all toasts can be configured on the `Toaster`.',
        'These options are only defaults and can be overriden using `dispatchToast',
      ].join('\n'),
    },
  },
};
