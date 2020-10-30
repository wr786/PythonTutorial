/**
 * @param {string} html 
 */
function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
window.$docsify = {
    coverpage: true,
    onlyCover: true,
    name: 'wr786的Python教程',
    loadSidebar: true,
    notFoundPage: '404.html',
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md'
    },
    search: {
        paths: 'auto',
        placeholder: '搜索...',
        noData: '无结果',
        depth: 2,
        hideOtherSidebarContent: true
    },
    pagination: {
        previousText: '上一节',
        nextText: '下一节',
        crossChapter: true,
        crossChapterText: true,
    },
    copyCode: {
        buttonText: '复制',
        errorText: '错误',
        successText: '已复制'
    },
    noEmoji: true,
    markdown: {
        renderer: {
            // Change code block rendering. Add line-numbers class.
            code: (code, lang) => {
                // For Standard Specification block.
                if (lang === 'sdsc') {
                    return `<pre class="sdsc">${htmlToElement(marked(code)).innerHTML}</pre>`;
                }
                // For IO block.
                if (lang === 'io') {
                    return `<div style="position:relative;"><pre class="io">${htmlToElement(marked(code)).innerHTML}</pre><div class="hint">输入输出</div></div>`;
                }
                let cc = document.createElement('code');
                cc.textContent = code;
                cc.setAttribute('class', 'language-' + lang);
                let html = `<pre data-lang="${lang.toLowerCase()}" class="line-numbers">${cc.outerHTML}</pre>`;

                return html;
            },
            // Add Standard Specification inline block. The Syntax is `@text@`.
            codespan: (code) => {
                if (code.match(/^@.*@$/) === null) {
                    return `<code>${code}</code>`;
                } else {
                    return `<code class="sdsc">${htmlToElement(marked(code.substring(1, code.length - 1))).innerHTML}</code>`;
                }
            }
        }
    },
    requestHeaders: {
        'cache-control': 'no-cache',
    },
    plugins: [
        // Do highlighting after page loaded.
        function (hook, vm) {
            hook.doneEach(() => {
                Prism.highlightAll();
            })
        },
        // // Add copyright text after copying
        // function (hook, vm) {
        //     hook.doneEach(() => {
        //         document.addEventListener('copy', (event) => {
        //             if (document.getSelection().anchorNode.tagName && document.getSelection().anchorNode.tagName.toLowerCase() == 'pre')
        //                 return;
        //             const pagelink = `\n\n————————————————\n转载自wr786的 Python 教程，未经许可不得以任何方式使用。\n原文链接： ${document.location.href}`;
        //             event.clipboardData.setData('text', document.getSelection() + pagelink);
        //             event.preventDefault();
        //         });
        //     })
        // },
    ],
    auto2top: true,
    executeScript: true
}