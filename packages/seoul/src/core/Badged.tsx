import React from 'react';

const StyledBadged = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledBadge = styled.span`
  &.badge-invisible {
    transform: scale(0) translate(50%, -50%);
    transform-origin: 100% 0%;
    transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  align-content: center;
  align-items: center;
  background-color: #1976d2;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: default;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.75rem;
  font-weight: 500;
  height: 20px;
  justify-content: center;
  min-width: 20px;
  padding: 0 4px;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 1;
`;

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

export interface BadgedProps {
  badgeStyle?: Object;
  label: string | number | undefined;
}

interface BadgeProps {
  badgeStyle?: Object;
  label: string | number | undefined;
}
