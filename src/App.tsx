import {useRoutes} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import getRoutes from './routes';

const App = () => {
    const routes = useRoutes(getRoutes());

    return(
        <>{routes}</>
    )
}

export default hot(App);