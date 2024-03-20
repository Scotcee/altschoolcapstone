import { createStore } from 'vuex';
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const storeInstance = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
            console.log('user state is now:', state.user);
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        }
    },
    actions: {
        async signup(context, { email, password }) {
            console.log('signup action')

            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                context.commit('setUser', res.user);
            } catch (error) {
                console.error('Error during signup:', error);
                throw error;
            }
        },
        async login(context, { email, password }) {
            console.log('login action')

            try {
                const res = await signInWithEmailAndPassword(auth, email, password);
                context.commit('setUser', res.user);
            } catch (error) {
                console.error('Error during login:', error);
                throw new Error('could not complete Login');
            }
        },
        async logout(context) {
            console.log('logout action');

            try {
                await signOut(auth);
                context.commit('setUser', null); 
            } catch (error) {
                console.error('Error during logout:', error);
                throw new Error('Could not complete logout');
            }
            console.log(context)
        }

    }
});

const unsub = onAuthStateChanged(auth, (user) => {
    storeInstance.commit('setAuthIsReady', true)
    storeInstance.commit('setUser', user)
    unsub()
})

export default storeInstance;
