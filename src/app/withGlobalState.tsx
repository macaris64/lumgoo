import React, { useEffect, ComponentType } from 'react';
import { userStore } from '@/store/user';

function withGlobalState<T extends object>(WrappedComponent: ComponentType<T>) {
  const WithGlobalStateComponent: React.FC<T> = (props) => {
    useEffect(() => {
      const intervalId = setInterval(() => {
          userStore.getMe().catch(() => {
            // Handle logout or redirect
          });
        }, 60000); // Every 60 seconds
      userStore.rehydrateUser();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithGlobalStateComponent;
}

export default withGlobalState;
