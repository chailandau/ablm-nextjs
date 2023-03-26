import styles from './Navigation.module.scss'

import { useQuery } from "@apollo/client"
import { NavigationQuery } from "../../../lib/queries"
import Text from "../../atoms/Text/Text"
import type { NavigationItem } from "../../graphqlTypes"
import Error from "../../utils/Error"
import Loading from "../../utils/Loading"


const Navigation = () => {
    const { loading, error, data } = useQuery(NavigationQuery)

    if (loading) {
        return <Loading />
    }

    if (error) {
        console.error(error)
        return <Error />
    }

    return (
        <nav className={styles.navigation}>
            <ul>
                {data &&
                    data?.renderNavigation.map((navItem: NavigationItem) => {
                        return (
                            navItem.path &&
                            <li key={navItem.id}>
                                <a href={navItem.path}>
                                    <Text size="sm" tag='span'>{navItem.title}</Text>
                                </a>
                            </li>
                        )
                    })}
            </ul>
        </nav>
    )
}

export default Navigation