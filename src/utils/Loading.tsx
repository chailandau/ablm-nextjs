import { FC } from "react"
import Text from "../atoms/Text/Text"

export interface LoadingProps {
    customText?: string
}

const Loading: FC<LoadingProps> = ({ customText }) => {
    return (
        <Text>
            {customText ? customText : 'Loading...'}
        </Text>
    )
}

export default Loading