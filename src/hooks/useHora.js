import { useContext } from 'react';
import { HoraContext } from '../contex/HoraProvider';

const useHora = () => useContext(HoraContext);

export default useHora;
