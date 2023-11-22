import React, { useEffect, ComponentType } from 'react';
import { userStore } from '@/store/user';

function withGlobalState<T extends object>(WrappedComponent: ComponentType<T>) {
  const WithGlobalStateComponent: React.FC<T> = (props) => {
    useEffect(() => {
      userStore.rehydrateUser();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithGlobalStateComponent;
}

export default withGlobalState;
