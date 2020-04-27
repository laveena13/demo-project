import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";


/**
 * Redux store.
 * @returns {(Store<any, Action> & Store<S & StateExt, A> & Ext) |
 * (Store<any, Action> & Store<S & StateExt, A> & Ext) |
 *  (Store<any, Action> & Store<S & {}, A> & {dispatch: Dispatch<A>})}
 */
export default function configureStore () {
  return createStore(

    compose(applyMiddleware(thunk))
  );
}
