import {Routes, Route, Link} from 'react-router-dom';
import '../App.css';
import SenddataComp from './Data';
import AddnumComp from './AddNum';
const HomeComp=()=>{
    return(
        <div>
            <Link to="/getdata" className='ben'>Data</Link>
            <Link to="addnum" className='ben'>Add num</Link>
            <Routes>
                <Route path='/getdata' element={<SenddataComp/>}></Route>
                <Route path='/addnum' element={<AddnumComp/>}></Route>
            </Routes>

            <div className='homepage'>
                <p>
                    שלום למבקשי המידע, על מנת לראות את המידע אנא בבקשה הצטרפו לקבוצת הטלגרם שלנו שם ההדגמה תתבצע
                </p>
                <p><a href='https://t.me/+hlJL5bUQkd44Yjg0' target='_blank'>Join Telegram Channel</a></p>
            </div>
        </div>
    )
};

export default HomeComp;