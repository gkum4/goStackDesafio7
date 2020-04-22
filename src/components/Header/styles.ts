import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  page: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      a:first-of-type {
        ${(props) =>
          props.page === 'dashboard' &&
          css`
            border: 2px solid #ff872c;
            border-top: 0;
            border-right: 0;
            border-left: 0;
          `}
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        padding-bottom: 7px;

        & + a {
          margin-left: 32px;
          ${(props) =>
            props.page === 'import' &&
            css`
              border: 2px solid #ff872c;
              border-top: 0;
              border-right: 0;
              border-left: 0;
            `}
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
