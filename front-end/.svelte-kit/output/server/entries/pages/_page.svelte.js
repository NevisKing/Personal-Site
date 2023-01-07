import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to the index</h1>
<a href="${"/hello-world"}">hello world</a>`;
});
export {
  Page as default
};
