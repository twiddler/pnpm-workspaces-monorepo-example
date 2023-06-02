# What's this?

This is the most basic working example of using pnpm workspaces. It'll help you understand setting up a monorepo with pnpm workspaces. It's got:

- An app that simulates what you'd deliver. It could be a server, a website, …
- A library with functions you'd like to share among your other packages.
- Another library which is organized in sub-packages.
- A `pnpm-workspace.yaml` configuration.

# How to use

Clone the repository. Then

```console
$ pnpm i
$ npm start
```

# More …

You could check out …

- [pnpm's official website](https://pnpm.io/)
- Scott Tolinski's video tutorial [_Monorepos with Pnpm_](https://levelup.video/tutorials/monorepos-with-pnpm)
- [vite's repository](https://github.com/vitejs/vite/blob/main/pnpm-workspace.yaml) as a production example of using pnpm workspaces
