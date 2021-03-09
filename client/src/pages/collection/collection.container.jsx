// import React, { useState, useCallback, useEffect } from 'react';

import { connect/*, useSelector, useDispatch */} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

// import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


// const CollectionPageContainer = ({...otherProps}) => {
//   const dispatch = useDispatch();
//   const fetchCollectionsStart = useCallback(
//     () => dispatch({ type: 'FETCH_COLLECTIONS_START' }),
//     [dispatch]);
  
//   const [isLoading, setLoading] = useState({isFetching: true});

//   useEffect(() => {
//       fetchCollectionsStart();
//       setLoading(() => {return {isFetching: false}})
//   }, []);

//   return (
//    <WithSpinner isLoading={isLoading}>
//      <CollectionPage {...otherProps}/>
//    </WithSpinner>
//   );
// }



const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
// equivalent to above : connect(mapStateToProps)(WithSpinner(CollectionPage))

// export default connect(mapStateToProps)(CollectionPageContainer);