import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from 'store';

type RootStateType = ReturnType<typeof store.getState>;
type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
