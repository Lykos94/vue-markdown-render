import Vue from "vue";
import MarkdownIt from "markdown-it";
declare const VueMarkdown: import("vue/types/vue").ExtendedVue<Vue, {
    md: MarkdownIt | null;
}, unknown, {
    content: string | undefined;
}, {
    html: boolean;
    source: string;
}>;
export default VueMarkdown;
