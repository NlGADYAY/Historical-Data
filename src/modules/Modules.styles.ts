import { styled } from 'styled-components';

export const Main = styled('div')({
  marginInline: '220px',
  height: '850px',
  width: '1440px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  borderInline: '1px solid #ccc',
});

export const MainContainer = styled('div')({
  height: '800px',
  width: '100%',
  zIndex: 1,
});

export const FooterContainer = styled('div')({
  display: 'flex',
  gap: '16px',
  zIndex: 1,
});

export const PeriodsContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '8px 16px',
});
