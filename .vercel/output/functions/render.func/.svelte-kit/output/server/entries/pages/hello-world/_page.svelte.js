import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
const CountButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { count = 0 } = $$props;
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `<button>${escape(count)}</button>
${count === 0 ? `<p>You haven&#39;t clicked the button</p>` : `${count < 10 ? `<p>You&#39;ve clicked the button a few times</p>` : `<p>You&#39;ve clicked the button a lot</p>`}`}`;
});
const MyParagraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>This is a paragraph I use to test how components import using SvelteKit!</p>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'p.svelte-3pvy32{font-family:"Comic Sans MS", cursive;font-size:5em}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<p class="${"svelte-3pvy32"}">Hello world!</p>

${validate_component(MyParagraph, "MyParagraph").$$render($$result, {}, {}, {})}
${validate_component(CountButton, "CountButton").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
