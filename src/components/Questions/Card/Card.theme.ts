import styled from "styled-components";

import { CardProps } from './Card.types';

import { appTheme  } from "../../../theme/Theme";

export const CardStyles = styled.div<CardProps>`
	display: flex;
  width: 39.6rem;
  flex-direction: column;
  height: 22.4rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 2rem;
  transition: transform .2s;

  .card-icon-title {
    background-color: ${appTheme.colors.DEFAULT_CARD_BG};
    padding: 1.8rem;
    min-height: 6.6rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  .card-title {
    max-width: 305px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }

  @media(max-width: 460px) {
    width: 100%;
  }
  
`;

export const CardBody = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  div:nth-child(1) {
    margin-bottom: 2rem;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
`;
