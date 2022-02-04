import { createContext, createRef, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CommitIcon as UlItemIcon } from '@radix-ui/react-icons';

const Ol = styled.ol`
  padding-left: 16px;
  margin-bottom: 24px;
  counter-reset: item;

  li {
    display: flex;
    list-style: none;
    counter-increment: item;
    margin-bottom: 12px;

    ::before {
      content: counters(item, ".") ".";
      color: var(--blue11);
      font-weight: var(--font-weight-medium);
      padding-right: 12px;
    }

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Ul = styled.ul`
  padding: 0;
  margin-bottom: 24px;
  list-style: none;

  li {
    display: flex;
    margin-bottom: 12px;

    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const IconWrapper = styled.span`
  padding-right: 12px;
  color: var(--blue11);
  transform: translateY(6px);
`;

const ItemContent = styled.div`
  flex: 1 1 0%;
`;

const ListContext = createContext<'ul' | 'ol' | null>(null);

type OrderedListProps = Omit<JSX.IntrinsicElements['ol'], 'ref'>;

function OrderedList({ children, ...otherProps }: OrderedListProps) {
  const ref = createRef<HTMLOListElement>();

  const [start, setStart] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      let start = parseInt(ref.current.getAttribute('start') ?? '0', 10);
      if (start > 0) {
        setStart(start - 1);
      }
     }
  }, [ref.current]);

  return (
    <Ol style={{ counterReset: `item ${start}`  }} ref={ref} {...otherProps}>
      <ListContext.Provider value="ol">
        {children}
      </ListContext.Provider>
    </Ol>
  );
}

type UnorderedListProps = Omit<JSX.IntrinsicElements['ul'], 'ref'>;

function UnorderedList({ children, ...otherProps }: UnorderedListProps) {

  return (
    <Ul {...otherProps}>
      <ListContext.Provider value="ul">
        {children}
      </ListContext.Provider>
    </Ul>
  );
}

type ListItemProps = Omit<JSX.IntrinsicElements['li'], 'ref'>;

function ListItem({ children, ...otherProps }: ListItemProps) {
  const listType = useContext(ListContext);

  return (
    <li {...otherProps}>
      {listType === 'ul' && (
        <IconWrapper>
          <UlItemIcon />
        </IconWrapper>
      )}
      <ItemContent>{children}</ItemContent>
    </li>
  );
}

export { OrderedList, ListItem, UnorderedList };