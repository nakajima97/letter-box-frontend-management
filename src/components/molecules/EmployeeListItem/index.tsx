import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  name: string;
};

const item = css`
  padding: 8px;
`;

const Index: FC<Props> = ({ name }) => <div css={item}>{name}</div>;

export default Index;
