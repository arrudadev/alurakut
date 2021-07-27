import styled from 'styled-components';

type TabsItemProps = {
  visible: boolean;
};

export const Tabs = styled.div`
  display: flex;
  align-items: center;

  button + button {
    margin-left: 20px;
  }
`;

export const TabsItem = styled.div<TabsItemProps>`
  margin-top: 20px;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;
