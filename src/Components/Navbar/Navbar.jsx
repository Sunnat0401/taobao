import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar-top">
          <ul className="navbar-lists">
            <li className="navbar-list">
              <select onChange={handleSelectChange}>
                <option value="/">全球</option>
                <option value="/">中国大陆</option>
                <option value="/">中國香港</option>
                <option value="/">中國台灣</option>
                <option value="/">韓國</option>
                <option value="/">马来西亚</option>
                <option value="/">澳大利亚</option>
                <option value="/">新加坡</option>
                <option value="/">日本</option>
              </select>
            </li>
            <li className="navbar-list">
              <Link to={'/'}>
                亲，请登录
              </Link>
            </li>
            <li className="navbar-list">
              <Link to={'/'}>
                中国澳门
              </Link>
            </li>
            <li className="navbar-list">
              <Link to={'/'}>
                馬來西亞
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
