export const categoryMap = {
    uiComp: {
        label: "UI组件",
        path: "docs/uiComponents",
    },
    senseComp: {
        label: "业务组件",
        path: "docs/senseComponents",
    },
    utilsFunc: {
        label: "工具函数",
        path: "docs/utils",
    }
}

export const uiCompGroupChoices = ["通用", "布局", "导航", "信息展示", "信息录入", "反馈", "引导提示", "其他"];
export const senseCompGroupChoices = ["平台", "商旅/商城", "费控", "支付"];

export const questionMap = {
    name: {
        type: "input",
        name: "name",
        message: "请填写文档名称",
        validate: function (input) {
          if (!/^[a-z][a-zA-Z]*$/g.test(input)) {
            return "请填写驼峰式英文名称";
          }
          return true;
        },
    },
    creator: {
        type: "input",
        name: "creator",
        message: "请填写文档维护人",
    },
    category: {
        type: "list",
        name: "category",
        message: "请选择文档所属目录",
        choices: Object.values(categoryMap).map(item => item.label),
    },
    uiCompGroup: {
        type: "list",
        name: "group",
        message: "请选择文档所属分组",
        choices: uiCompGroupChoices,
        default: "其他",
    },
    senseCompGroup: {
        type: "list",
        name: "group",
        message: "请选择文档所属分组",
        choices: senseCompGroupChoices,
        default: "平台",
    },
}
