import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useMemo
} from 'react';
import * as PropType from 'prop-types';
import Header from './Header';
import Icon from './Icon';
import Body from './Body';

const cls = 'expandable';
export const expandableContext = createContext();
const { Provider } = expandableContext;

export const sum = (a, b) => {
  return a + b;
};

const Expandable = ({ className = '', header, body, ...otherProps}) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
      setExpanded(prevState => !prevState);
    },
    []
  );

  const value = useMemo(() => ({ toggle, expanded }), [expanded, toggle]);

  return (
    <Provider value={value}>
      <div className={`${cls} ${className}`} {...otherProps}>
        <Header>{header ? header : 'Reintroducing React'}</Header>
        <Icon />
        <Body>{body ? body : 'This is body'}</Body>
      </div>
    </Provider>
  );
};

Expandable.propTypes = {
  className: PropType.string
};

export default Expandable;