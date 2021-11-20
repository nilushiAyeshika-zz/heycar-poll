import React, { useEffect, useCallback, useState } from "react";
import debounce from 'debounce';

import Card from "../Card/Card.component";
import Grid from "../../Layout/Grid/Grid.component";

import { QuestionListProps } from './QuestionList.types';

import QuestionListWrapper from './QuestionList.theme';

const DefaultPlaceholderItemsCount = 5;

const QuestionList: React.FC<QuestionListProps<any>> = (props) => {
  const {
    className,
    placeholderCount,
    data,
    dataLoading,
    bottomHitThreshold,
    onNextPageRequested,
  } = props;

  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount;

  const scrollResolver = useCallback(debounce((event: any) => {
    const { target } = event;
    const bottomHit =
      target.scrollHeight - target.scrollTop -
      (bottomHitThreshold || DefaultPlaceholderItemsCount) <= target.clientHeight;

    if (bottomHit) onNextPageRequested?.();
  }, 400), []);

  const scrollHandler = useCallback((event) => {
    scrollResolver(event);
  }, []);

  const [scrollContainerRef, setScrollContainerRef] = useState<HTMLDivElement | null>(null);

  const handleScrollContainerRef = useCallback((ref: HTMLDivElement) => {
    if (ref) {
      setScrollContainerRef(ref);
      ref.addEventListener('scroll', scrollHandler);
    }
  }, []);

  useEffect(() => {
    return () => scrollContainerRef?.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <QuestionListWrapper
      className={className}
      ref={handleScrollContainerRef}
    >
      <Grid className="card-list-inner">
        <Card title="Question one"
          className="question-card"
          onClick={() => console.log('hii')}
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Two"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Three"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Four"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Five"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Six"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Seven"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Four"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Five"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Six"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
        <Card title="Question Seven"
          className="question-card"
          publishedAt="2021/01/8"
          choices={2}
        />
      </Grid>
    </QuestionListWrapper>
  )
}

export default QuestionList;