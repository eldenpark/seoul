import React from 'react';

const StyledDropdwon = styled.div``;

const StyledSelected = styled.div`
  & i {
    margin-left: 7px;
  }
  align-items: center;
  display: flex;
  justify-center: space-between;
`;

const ArrowDownIcon = styled.i`
  // height: 1em;
  // width: 1em;
  border: 7px solid transparent;
  border-top: 7px solid;
  border-right: 7px solid;
  display: inline-block;
  margin: 15px;
  transform: rotate(90deg);
`;

const Selected = ({
  children,
  handleClickArrow,
}) => {
  return (
    <StyledSelected>
      {children}
      <ArrowDownIcon
        onClick={handleClickArrow}
      />
    </StyledSelected>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  handleClickRow,
  rows,
  selectedIdx,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClickArrow = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const synthesizedHandleChange = React.useCallback((e) => { // eslint-disable-line
    setIsOpen(false);
    if (handleClickRow) {
      handleClickRow(e);
    }
  }, []);

  const selected = React.useMemo(() => {
    if (rows.length > 0) {
      return rows[0].reactElement;
    }
    return '';
  }, [rows, selectedIdx]);

  const dropdownRows = React.useMemo(() => {
    return rows.map((row) => row.reactElement);
  }, [rows]);

  return (
    <StyledDropdwon>
      <Selected
        handleClickArrow={handleClickArrow}
      >
        {selected}
      </Selected>
      {isOpen ? dropdownRows : ''}
    </StyledDropdwon>
  );
};

export default Dropdown;

export interface DropdownProps {
  handleClickRow;
  rows: {
    data: {
      idx: string | number;
      [key: string]: any;
    },
    reactElement: JSX.Element;
  }[];
  selectedIdx: string | number;
}
