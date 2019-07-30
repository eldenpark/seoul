import { __RouterContext as RouterContext } from 'react-router';
import { useContext } from 'react';

export default function useRouter() {
  return useContext(RouterContext);
}
