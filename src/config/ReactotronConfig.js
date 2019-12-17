import Reactotorn from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
    const tron = Reactotorn.configure().connect();

    tron.clear();

    console.tron = tron;
}
