import run from "@rollup/plugin-run";
import { rollup } from "rollup";

export const roll = rollup;

const dev = process.env.NODE_ENV !== "production";

export default {
	input: "src/app.js",
	output: {
		file: "dist/app.js",
		format: "cjs",
	},
	plugins: [dev && run({
		execArgv: ["-r", "dotenv/config"],
	})],
};
