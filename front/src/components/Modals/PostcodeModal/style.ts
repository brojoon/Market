import styled from 'styled-components';

export const DaumPostcodeContainer = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  position: absolute;
  background-color: rgba(200, 200, 200, 0.5);

  .post-code {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
