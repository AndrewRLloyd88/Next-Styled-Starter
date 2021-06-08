import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  background-color: white;
`;

export default function Page({ children }: any) {
  return (
    <div>
      <GlobalStyles />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
