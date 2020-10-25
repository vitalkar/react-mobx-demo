import { useContext } from 'react';
import AppContext from '../context/AppContext';
const useStore = () => useContext(AppContext); 
export default useStore;