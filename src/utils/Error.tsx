import { FC } from "react"
import Text from "../atoms/Text/Text"
import { LoadingProps } from "./Loading"


const Error: FC<LoadingProps> = ({ customText }) => {
    return (
        <Text>
            {customText ? customText : 'Error fetching data'}
        </Text>
    )
}

export default Error