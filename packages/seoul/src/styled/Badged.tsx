import React from 'react';
import styled from 'styled-components';

const StyledBadged = styled.div({
  display: 'inline-block',
  position: 'relative',
});

const StyledBadge = styled.span({
  '&.badge-invisible': {
    transform: 'scale(0) translate(50%, -50%) !important',
    transformOrigin: '100% 0%',
    transition: 'transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  alignContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1976d2',
  borderRadius: 10,
  boxSizing: 'border-box',
  color: '#fff',
  cursor: 'default',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: '0.75rem',
  fontWeight: 500,
  height: 20,
  justifyContent: 'center',
  minWidth: 20,
  padding: '0 4px',
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'scale(1) translate(50%, -50%)',
  transformOrigin: '100% 0%',
  transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  zIndex: 1,
});

const Badge: React.FC<BadgeProps> = ({
  badgeStyle,
  label,
}) => {
  return (
    <StyledBadge
      className={(label === undefined ? 'badge-invisible' : '')}
      style={badgeStyle}
    >
      {label}
    </StyledBadge>
  );
};

const Badged: React.FC<BadgedProps> = ({
  badgeStyle,
  children,
  label,
}) => {
  return (
    <StyledBadged>
      {children}
      <Badge
        badgeStyle={badgeStyle}
        label={label}
      />
    </StyledBadged>
  );
};

export default Badged;

interface BadgedProps {
  badgeStyle?: Object;
  label: string | number | undefined;
}

interface BadgeProps {
  badgeStyle?: Object;
  label: string | number | undefined;
}
