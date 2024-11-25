import  { styled } from 'styled-components'

import { v } from '../../styles/variables'

export const SLayout = styled.div`
    display: flex;
`

export const SMain = styled.main`
    padding: calc(${v.smSpacing} *2);
    
  flex: 1;
  margin-left: ${({ isOpen }) => (isOpen ? '220px' : '80px')};
  padding: 20px;
  transition: margin-left 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


   
`