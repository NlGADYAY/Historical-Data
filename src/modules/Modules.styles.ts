import { styled } from 'styled-components';

export const Main = styled('div')({
  marginInline: '220px',
  height: '1080px',
  width: '1440px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  borderInline: '1px solid #ccc',

  "@media (max-width: 320px)" : {
    width: '100%',
    height: '570px',
    margin: '20px',
  }
});

export const MainContainer = styled('div')({
  height: '80%',
  width: '100%',
  zIndex: 1,

  "@media (maxWidth: 320px)" : {
    height: '100%%'
  }
});

export const FooterContainer = styled('div')({
  display: 'flex',
  gap: '16px',
  zIndex: 1,

  "@media (max-width: 320px)" : {
    height: "100%"
  }
});

export const PeriodsContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '8px 16px',
  "@media (max-width: 320px)" : {
    position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  }

});
