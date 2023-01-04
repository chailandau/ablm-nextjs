export const parameters = {
    backgrounds: { disable: true },
    options: {
        storySort: {
            method: "alphabetical",
            order: ["Guides", ["Get Started", "*"], "Atoms", "Molecules", "Components"],
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
