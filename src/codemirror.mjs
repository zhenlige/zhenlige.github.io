export {EditorView, keymap} from "@codemirror/view";
import {basicSetup} from "codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {indentUnit} from "@codemirror/language";
import {indentWithTab} from "@codemirror/commands";

export const setup = [
	basicSetup,
	javascript(),
	indentUnit.of("\t"),
	keymap.of(indentWithTab),
];