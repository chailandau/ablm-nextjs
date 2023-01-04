module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    addons: ["@storybook/addon-essentials"],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    staticDirs: ["./public"],
    features: { emotionAlias: false, postcss: false },
};
