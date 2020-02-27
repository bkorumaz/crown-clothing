import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('arg3DtgLz6QNo46gqPRc').collection('cartItems').doc('4HJtplxDz07kLaJc6Gbw');

firestore.doc('users/arg3DtgLz6QNo46gqPRc/cartItems/4HJtplxDz07kLaJc6Gbw');
firestore.collection('users/arg3DtgLz6QNo46gqPRc/cartItems');