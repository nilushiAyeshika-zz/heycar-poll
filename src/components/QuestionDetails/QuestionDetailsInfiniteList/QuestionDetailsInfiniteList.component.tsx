import React, { useCallback, useEffect, useState } from "react";
import debounce from 'debounce';

import Grid from '../../../components/Layout/Grid/Grid.component';
import QuestionDetailCard from "../QuestionDetailCard/QuestionDetailCard.component";

import { DetailInfiniteProps } from './QuestionDetailsInfiniteList.types';

import QuestionDetailsInfiniteWrapper from './QuestionDetailsInfiniteList.theme';

const DefaultPlaceholderItemsCount = 5;

const QuestionDetailsInfiniteList: React.FC<DetailInfiniteProps<any>> = (props) => {
  const {
    id,
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
    <QuestionDetailsInfiniteWrapper
      id={id}
      className={className}
      ref={handleScrollContainerRef}
    >
      {/* {data.map((item, index) => ( */}
        <QuestionDetailCard id="1" className="ques-card"/>
        <QuestionDetailCard id="2" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
        <QuestionDetailCard id="3" className="ques-card"/>
      {/* ))} */}

      {dataLoading && Array.from(Array(placeholderItemsCount).keys()).map((index) => (
        // <ScheduledCallsCardRowLoading
        //   id={`${id}-Row-Placeholder-${index}`}
        //   key={`${id}-Row-Placeholder-${index}`}
        //   style={style}
        //   miniVersion={true}
        // />
        <div key={index}> loading </div>
      ))}
    </QuestionDetailsInfiniteWrapper>
  )
}

export default QuestionDetailsInfiniteList;