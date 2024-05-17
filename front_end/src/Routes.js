import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContactUs } from './components/ContactUs';
import { GetInvolved } from './components/GetInvolved';

export const Paths = () => {
return (
    <Router>
        <Routes>
            <Route path="/" element ={<ContactUs />} />
            <Route path="/" element ={<GetInvolved />} />
        </Routes>
    </Router>
    );
}

export default Paths;