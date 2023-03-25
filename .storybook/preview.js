import "../styles/main.scss";

export const parameters = {
    backgrounds: { disable: true },
    options: {
        storySort: {
            method: "alphabetical",
            order: ["Atoms", "Molecules", "Components"],
        },
        showPanel: true,
    },
    actions: {
        argTypesRegex: "^on.*",
    },
    controls: {
        sort: "requiredFirst",
    },
};
