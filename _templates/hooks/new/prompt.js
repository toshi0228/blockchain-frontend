module.exports = [
    {
        message: 'hook名は(ex Auth)？',
        name: 'name',
        type: 'input',
    },
    {
        message: 'hooksフォルダー配下に新しくエントリーポイントを作成しますか？',
        name: 'isInject',
        type: 'toggle',
        enabled: 'Yes',
        disabled: 'No',
    },
];