export {EditorView, basicSetup} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {indentUnit} from "@codemirror/language";
import {indentWithTab} from "@codemirror/commands";

export const setup = [
	indentUnit.of("\t"),
	indentWithTab,
	basicSetup,
	javascript(),
];