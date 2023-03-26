import { FC } from "react";

import styles from './Heading.module.scss'

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export const headingSizes = ['sm', 'md', 'lg'] as const;

interface HeadingProps {
    tag?: typeof headingTags[number];
    size?: typeof headingSizes[number];
    children: string;
}

const Heading: FC<HeadingProps> = ({ tag: SemanticTag = 'h2', size = 'md', children }) => {
    return (
        <SemanticTag className={`${styles[size]}`}>
            {children}
        </SemanticTag>
    );
};

export default Heading;