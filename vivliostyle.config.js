module.exports = {
    title: '千代ヶ崎砲台跡のガイド', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
    author: '小形克宏', // default to `author` in `package.json` or undefined.
    language: 'ja',
    size: 'A4',
    theme: 'theme/theme.css', // .css or local dir or npm package. default to undefined.
    // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
    entry: [
        "text/20220827_chiyogasaki_guide.md",
        // 'manuscript.md', // `title` is automatically guessed from the file (frontmatter > first heading).
        // {
        //   path: 'epigraph.md',
        //   title: 'Epigraph', // title can be overwritten (entry > file),
        //   theme: '@vivliostyle/theme-whatever', // theme can be set indivisually. default to the root `theme`.
        // },
        // 'glossary.html', // html can be passed.
    ], // `entry` can be `string` or `object` if there's only single markdown file.
    output: [
        20220827_chiyogasaki_guide'.pdf',
    ],
    // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
    // cover: './cover.png', // cover image. default to undefined.
    // workspaceDir: '.vivliostyle',
    http: true,
    timeout: 1000000,
}
