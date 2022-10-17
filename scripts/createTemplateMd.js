export default function createTemplateMd ({
    group, order, creator
}) {
    // console.log(group, order, creator)
    return `---
group:
    title: ${group}
order: ${order}
toc: content
---

# 标题

维护人：${creator}

## 示例

\`\`\`jsx
import React from 'react';
import DemoBlock from '@demo/DemoBlock';

// 引入组件
// import Collapse from '@uiComp/Collapse/collapse';

export default () => {
    // 组件数据
    const data = []
    return (
        <>
        <DemoBlock title="基础用法" padding="10">
            // 此处渲染组件
        </DemoBlock>
        </>
    )
}
\`\`\`

<!-- <API src="../../../app/<componentPath>"></API> -->
`
}