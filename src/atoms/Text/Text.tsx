import { FC } from "react";

import styles from './Text.module.scss';

export const textSizes = ['sm', 'md', 'lg'] as const;

export const textTags = ['span', 'p'] as const;

interface TextProps {
    tag: typeof textTags[number];
    size: typeof textSizes[number];
    children: string;
}

const Text: FC<TextProps> = ({ tag: TextTag = 'p', size = 'md', children }) => {
    return (
        <TextTag className={`${styles[size]}`}>
            {children}
        </TextTag>
    );
};

export default Text;