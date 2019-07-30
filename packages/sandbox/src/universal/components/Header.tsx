import React from 'react';

import useRouter from '@@universal/hooks/useRouter';

const Title = ({
  pathname,
}) => {
  return (
    <div>{pathname}</div>
  );
};

const Header: React.FC<{}> = () => {
  const { history, location } = useRouter();
  const { pathname } = location;

  const handleClickButton = React.useCallback((route) => () => {
    history.push(route);
  }, []);

  return (
    <div
      style={{
        marginBottom: 100,
      }}
    >
      <Title pathname={pathname} />
      <button
        onClick={handleClickButton('/')}
        type="button"
      >
        Root
      </button>
      <button
        onClick={handleClickButton('/pageOne')}
        type="button"
      >
        Page one
      </button>
    </div>
  );
};

export default Header;
