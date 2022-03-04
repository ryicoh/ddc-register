import {
  BaseSource,
  Candidate,
  Context,
} from "https://deno.land/x/ddc_vim@v0.17.0/types.ts#^";

import { Denops, fn } from "https://deno.land/x/ddc_vim@v0.17.0/deps.ts#^";

type Params = Record<never, never>;

export type ActionData = {
  text: string;
  regType?: string;
};

export class Source extends BaseSource<Params> {
  kind = "word";

  async gatherCandidates(args: {
    denops: Denops;
    context: Context;
    sourceParams: Params;
  }): Promise<Candidate[]> {
    const registers = (await fn.has(args.denops, "clipboard") ? ["+", "*"] : [])
      .concat([
        '"',
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "-",
        ".",
        ":",
        "#",
        "%",
        "/",
        "=",
      ]);

    const cs: Candidate[] = [];
    for (const name of registers) {
      const register = await fn.substitute(
        args.denops,
        await fn.getreg(args.denops, name, 1),
        "[\\xfd\\x80]",
        "",
        "g",
      ) as string;
      if (!register) {
        continue;
      }

      cs.push({
        word: register.replace(/\n/g, "\\n"),
	kind: name,
      });
    }

    return cs
  }

  params(): Params {
    return {};
  }
}
