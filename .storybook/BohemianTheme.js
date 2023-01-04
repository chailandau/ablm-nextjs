import { create } from "@storybook/theming";
import darkLogo from "./public/darkLogo.svg";

export default create({
    base: "light",
    brandTitle: "A Bohemian Like Me",
    brandUrl: "https://abohemianlikeme.com",
    brandImage: darkLogo,
    brandTarget: "_self",
});
