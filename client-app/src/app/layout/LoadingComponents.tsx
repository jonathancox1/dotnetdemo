import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface IProps {
  inverted?: boolean;
  content?: string;
}

export const LoadingComponents = ({ inverted, content }: IProps) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};
