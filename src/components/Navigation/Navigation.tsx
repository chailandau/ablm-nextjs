import { useQuery } from "@apollo/client"
import { NavigationQuery } from "../../../lib/queries"
import type { NavigationItem } from "../../graphqlTypes"

const Navigation = () => {

    const { loading, error, data } = useQuery(NavigationQuery)

    if (error) {
        console.warn(error)
    }

    return (
        <ul>
            {!loading && data?.renderNavigation.map((navItem: NavigationItem) => {
                return (
                    navItem.path &&
                    <li key={navItem.id}>
                        <a href={navItem.path}>
                            {navItem.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navigation