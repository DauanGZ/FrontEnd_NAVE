import { Link } from 'react-router-dom';
import Forms from '../components/Forms';

export default function CreatePost () {

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    <Link className="link" to="/">home</Link>
                </h2>
                <h1>
                    E N V I O S
                </h1>
                
                <div>
                    <Forms />
                </div>
            </header>
        </div>
    );

}