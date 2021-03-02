import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>Page Comp.</h2>
      {children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.any
}
