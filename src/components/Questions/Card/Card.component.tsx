import React, { forwardRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

import IconTitle from "../../Shared/IconTitle/IconTitle.component";
import Text from "../../Core/Text/Text.component";
import { generateRandomColors, isLightColor } from "../../../utils/theme.utils";

import { CardProps } from './Card.types';

import { CardStyles, CardBody, OptionWrapper } from './Card.theme';

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const {
    className,
    title,
		onClick,
    callbackValue,
    icon,
    choices,
    publishedAt,
	} = props;

  const iconBgColor = generateRandomColors(title);

  const handleClick = useCallback((e) => {
    const event = e;
    onClick?.(callbackValue, event);
  }, [onClick, callbackValue]);

	return (
    <CardStyles
      ref={ref}
      className={className}
      title={title}
      publishedAt={publishedAt}
      choices={choices}
      callbackValue={callbackValue}
      onClick={handleClick}
      icon={icon}
    >
      <IconTitle
        icon={<FontAwesomeIcon icon={faQuestion} />}
        className="card-icon-title"
        backgroundColor={iconBgColor}
        isLightIcon={isLightColor(iconBgColor)}
      >
        <Text size="l" weight="bold">{title}</Text>
      </IconTitle>
      <CardBody>
        <OptionWrapper>
          <Text size="m" weight="bold">Published At:</Text>
          <Text size="m">&nbsp;{publishedAt}</Text>
        </OptionWrapper>
        <OptionWrapper>
          <Text size="m" weight="bold">Choices:</Text>
          <Text size="m">&nbsp;{choices}</Text>
        </OptionWrapper>
      </CardBody>
    </CardStyles>
	);
});

export default Card;